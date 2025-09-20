import { useAuth } from '@/lib/auth';
import { EmployeeDashboard } from '@/components/dashboard/EmployeeDashboard';
import { ManagerDashboard } from '@/components/dashboard/ManagerDashboard';
import { HRDashboard } from '@/components/dashboard/HRDashboard';

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Render role-specific dashboard
  switch (user.role) {
    case 'Manager':
    case 'DepartmentHead':
      return <ManagerDashboard />;
    
    case 'HR':
    case 'Admin':
      return <HRDashboard />;
    
    case 'Employee':
    default:
      return <EmployeeDashboard />;
  }
};

export default Dashboard;