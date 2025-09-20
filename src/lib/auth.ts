import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import axios from 'axios';

export type UserRole = 'Employee' | 'Manager' | 'HR' | 'Admin' | 'DepartmentHead';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  department: string;
  profilePicture?: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  setUser: (user: User) => void;
}

// Create axios instance for API calls
export const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

// Mock API responses for development
const mockLogin = async (email: string, password: string): Promise<{ user: User; accessToken: string }> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock user data based on email
  const mockUsers: Record<string, User> = {
    'admin@company.com': {
      id: '1',
      email: 'admin@company.com',
      firstName: 'Admin',
      lastName: 'User',
      role: 'Admin',
      department: 'IT',
    },
    'hr@company.com': {
      id: '2',
      email: 'hr@company.com',
      firstName: 'HR',
      lastName: 'Manager',
      role: 'HR',
      department: 'Human Resources',
    },
    'manager@company.com': {
      id: '3',
      email: 'manager@company.com',
      firstName: 'Team',
      lastName: 'Manager',
      role: 'Manager',
      department: 'Engineering',
    },
    'employee@company.com': {
      id: '4',
      email: 'employee@company.com',
      firstName: 'John',
      lastName: 'Doe',
      role: 'Employee',
      department: 'Engineering',
    },
  };

  const user = mockUsers[email];
  if (!user || password !== 'password123') {
    throw new Error('Invalid credentials');
  }

  return {
    user,
    accessToken: 'mock-jwt-token-' + user.id,
  };
};

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      isAuthenticated: false,
      isLoading: false,

      login: async (email: string, password: string, rememberMe = false) => {
        try {
          set({ isLoading: true });
          
          // Use mock login for development
          const { user, accessToken } = await mockLogin(email, password);
          
          set({
            user,
            accessToken,
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          accessToken: null,
          isAuthenticated: false,
        });
      },

      refreshToken: async () => {
        // Implement refresh token logic
        const state = get();
        if (!state.accessToken) {
          throw new Error('No access token available');
        }
        // Mock refresh - in real app, call refresh endpoint
      },

      setUser: (user: User) => {
        set({ user });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

// API interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = useAuth.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config;
    
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      
      try {
        await useAuth.getState().refreshToken();
        return api(original);
      } catch (refreshError) {
        useAuth.getState().logout();
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);