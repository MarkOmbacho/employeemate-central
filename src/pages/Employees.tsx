import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RoleGuard } from '@/components/auth/ProtectedRoute';

const Employees = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Employee Management</h1>
        <p className="text-muted-foreground">Manage employee information and records.</p>
      </div>

      <RoleGuard roles={['HR', 'Admin', 'Manager']}>
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle>Employee Directory</CardTitle>
            <CardDescription>
              This feature is under development. You'll be able to view employee profiles,
              manage personal information, and track employment history here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Employee directory, profile management, and document tracking.
            </p>
          </CardContent>
        </Card>
      </RoleGuard>
    </div>
  );
};

export default Employees;