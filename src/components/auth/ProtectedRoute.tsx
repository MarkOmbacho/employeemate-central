import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, UserRole } from '@/lib/auth';

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: UserRole[];
  fallback?: ReactNode;
}

export const ProtectedRoute = ({ 
  children, 
  roles, 
  fallback 
}: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (roles && user && !roles.includes(user.role)) {
    return fallback || (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Access Denied
          </h1>
          <p className="text-muted-foreground">
            You don't have permission to access this page.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

interface RoleGuardProps {
  children: ReactNode;
  roles: UserRole[];
  fallback?: ReactNode;
}

export const RoleGuard = ({ children, roles, fallback = null }: RoleGuardProps) => {
  const { user } = useAuth();
  
  if (!user || !roles.includes(user.role)) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
};