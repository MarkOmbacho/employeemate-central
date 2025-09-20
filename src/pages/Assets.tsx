import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Assets = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Asset Management</h1>
        <p className="text-muted-foreground">Track and manage company assets and equipment.</p>
      </div>

      <Card className="enterprise-card">
        <CardHeader>
          <CardTitle>Asset Tracking System</CardTitle>
          <CardDescription>
            This feature is under development. You'll be able to view assigned assets,
            request new equipment, and track asset history here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon: Asset inventory, assignment tracking, and request management.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Assets;