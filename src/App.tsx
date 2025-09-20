import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AppLayout } from "@/components/layout/AppLayout";
import { useAuth } from "@/lib/auth";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Leave from "./pages/Leave";
import Payroll from "./pages/Payroll";
import Assets from "./pages/Assets";
import Purchases from "./pages/Purchases";
import Employees from "./pages/Employees";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          isAuthenticated ? <Navigate to="/" replace /> : <Login />
        } 
      />
      
      <Route 
        path="/*" 
        element={
          <ProtectedRoute>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/leave/*" element={<Leave />} />
                <Route 
                  path="/payroll/*" 
                  element={
                    <ProtectedRoute roles={['Employee', 'HR', 'Admin']}>
                      <Payroll />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/assets/*" element={<Assets />} />
                <Route path="/purchases/*" element={<Purchases />} />
                <Route 
                  path="/employees/*" 
                  element={
                    <ProtectedRoute roles={['HR', 'Admin', 'Manager']}>
                      <Employees />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/reports/*" 
                  element={
                    <ProtectedRoute roles={['Manager', 'HR', 'Admin', 'DepartmentHead']}>
                      <Reports />
                    </ProtectedRoute>
                  } 
                />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
