import { useNavigate } from 'react-router-dom';
import { Users, Upload, FileText, DollarSign, Calendar, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const HRDashboard = () => {
  const navigate = useNavigate();

  const systemAlerts = [
    {
      id: 1,
      type: 'payroll',
      title: 'Payroll Upload Due',
      description: 'December 2024 payroll needs to be uploaded',
      severity: 'high',
      action: 'Upload Now',
      actionUrl: '/payroll/upload',
    },
    {
      id: 2,
      type: 'compliance',
      title: 'Employee Documents Missing',
      description: '3 employees missing mandatory documents',
      severity: 'medium',
      action: 'Review',
      actionUrl: '/employees',
    },
    {
      id: 3,
      type: 'leave',
      title: 'Leave Balance Reviews',
      description: 'Annual leave balances need year-end review',
      severity: 'low',
      action: 'Review',
      actionUrl: '/leave/review',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'New employee onboarded',
      details: 'Sarah Johnson - Marketing',
      time: '2 hours ago',
      type: 'employee'
    },
    {
      id: 2,
      action: 'Payroll processed',
      details: 'November 2024 - 127 employees',
      time: '1 day ago',
      type: 'payroll'
    },
    {
      id: 3,
      action: 'Policy update published',
      details: 'Remote work policy v2.1',
      time: '2 days ago',
      type: 'policy'
    },
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return { text: 'High Priority', variant: 'destructive' as const };
      case 'medium':
        return { text: 'Medium', variant: 'secondary' as const };
      case 'low':
        return { text: 'Low', variant: 'outline' as const };
      default:
        return { text: severity, variant: 'outline' as const };
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">HR Dashboard</h1>
        <p className="text-muted-foreground">Manage employees, payroll, and company policies.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Employees"
          value="127"
          description="Active workforce"
          icon={<Users className="h-4 w-4" />}
          trend={{ value: 8, label: 'new this month', isPositive: true }}
          onClick={() => navigate('/employees')}
        />
        <DashboardCard
          title="Pending Leave Requests"
          value="15"
          description="Awaiting HR review"
          icon={<Calendar className="h-4 w-4" />}
          badge={{ text: 'Review needed', variant: 'secondary' }}
          onClick={() => navigate('/leave/hr')}
        />
        <DashboardCard
          title="Payroll Status"
          value="Up to date"
          description="Last processed: Dec 1"
          icon={<DollarSign className="h-4 w-4" />}
          onClick={() => navigate('/payroll/report')}
        />
        <DashboardCard
          title="Compliance Score"
          value="94%"
          description="Documentation complete"
          icon={<CheckCircle className="h-4 w-4" />}
          trend={{ value: 2, label: 'vs last month', isPositive: true }}
        />
      </div>

      {/* System Alerts & Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* System Alerts */}
        <Card className="enterprise-card xl:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <span>System Alerts</span>
                </CardTitle>
                <CardDescription>
                  Items requiring your attention
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemAlerts.map((alert) => (
              <div key={alert.id} className="p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-foreground">{alert.title}</p>
                      <Badge {...getSeverityBadge(alert.severity)} />
                    </div>
                    <p className="text-sm text-muted-foreground">{alert.description}</p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => navigate(alert.actionUrl)}
                  >
                    {alert.action}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest HR system updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-primary-light flex items-center justify-center mt-1">
                  {activity.type === 'employee' && <Users className="h-4 w-4" />}
                  {activity.type === 'payroll' && <DollarSign className="h-4 w-4" />}
                  {activity.type === 'policy' && <FileText className="h-4 w-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.details}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="enterprise-card">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>
            Common HR management tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/payroll/upload')}
            >
              <Upload className="h-5 w-5" />
              <span>Upload Payroll</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/employees/new')}
            >
              <Users className="h-5 w-5" />
              <span>Add Employee</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/reports')}
            >
              <FileText className="h-5 w-5" />
              <span>Generate Reports</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/assets/manage')}
            >
              <TrendingUp className="h-5 w-5" />
              <span>Asset Inventory</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};