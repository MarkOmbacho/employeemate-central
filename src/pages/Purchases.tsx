import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Purchases = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Purchase Requests</h1>
        <p className="text-muted-foreground">Submit and track purchase requests for approval.</p>
      </div>

      <Card className="enterprise-card">
        <CardHeader>
          <CardTitle>Purchase Request System</CardTitle>
          <CardDescription>
            This feature is under development. You'll be able to submit purchase requests,
            track approval status, and manage procurement workflows here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon: Purchase request forms, approval workflows, and budget tracking.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Purchases;