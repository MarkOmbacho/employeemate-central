import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RoleGuard } from '@/components/auth/ProtectedRoute';

const Reports = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Reports & Analytics</h1>
        <p className="text-muted-foreground">Generate and view company reports and analytics.</p>
      </div>

      <RoleGuard roles={['Manager', 'HR', 'Admin', 'DepartmentHead']}>
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle>Reporting System</CardTitle>
            <CardDescription>
              This feature is under development. You'll be able to generate various reports
              including leave analytics, payroll summaries, and asset utilization here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Coming soon: Leave reports, attendance analytics, asset reports, and financial summaries.
            </p>
          </CardContent>
        </Card>
      </RoleGuard>
    </div>
  );
};

export default Reports;