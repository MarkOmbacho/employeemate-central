import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Settings = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your profile and application preferences.</p>
      </div>

      <Card className="enterprise-card">
        <CardHeader>
          <CardTitle>User Settings</CardTitle>
          <CardDescription>
            This feature is under development. You'll be able to update your profile,
            change notification preferences, and manage security settings here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon: Profile management, notification settings, and security preferences.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;