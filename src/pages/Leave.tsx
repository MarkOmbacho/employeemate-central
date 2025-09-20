import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Leave = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Leave Management</h1>
        <p className="text-muted-foreground">Manage your leave requests and balance.</p>
      </div>

      <Card className="enterprise-card">
        <CardHeader>
          <CardTitle>Leave Management System</CardTitle>
          <CardDescription>
            This feature is under development. You'll be able to apply for leave, 
            view your leave history, and track approvals here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon: Leave application forms, approval workflows, and balance tracking.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leave;