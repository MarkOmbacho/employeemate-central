import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Payroll = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Payroll</h1>
        <p className="text-muted-foreground">View your payroll information and summaries.</p>
      </div>

      <Card className="enterprise-card">
        <CardHeader>
          <CardTitle>Payroll System</CardTitle>
          <CardDescription>
            This feature is under development. You'll be able to view your payroll summaries,
            attendance records, and benefit details here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon: Payroll summaries, attendance tracking, and benefit statements.
            Note: Salary figures will not be displayed for security reasons.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payroll;