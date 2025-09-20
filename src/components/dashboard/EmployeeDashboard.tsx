import { useNavigate } from 'react-router-dom';
import { Calendar, DollarSign, Package, FileText, Clock, CheckCircle } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const EmployeeDashboard = () => {
  const navigate = useNavigate();

  const recentActivities = [
    {
      id: 1,
      type: 'leave',
      title: 'Annual Leave Request',
      description: 'Approved by Manager',
      status: 'approved',
      date: '2 hours ago',
    },
    {
      id: 2,
      type: 'asset',
      title: 'MacBook Pro Assigned',
      description: 'Asset ID: MAC-001',
      status: 'assigned',
      date: '1 day ago',
    },
    {
      id: 3,
      type: 'payroll',
      title: 'Payroll Summary Available',
      description: 'December 2024',
      status: 'available',
      date: '3 days ago',
    },
  ];

  const quickActions = [
    {
      title: 'Apply for Leave',
      description: 'Submit a new leave request',
      action: () => navigate('/leave/apply'),
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      title: 'View Payroll',
      description: 'Check your payroll summary',
      action: () => navigate('/payroll/me'),
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: 'My Assets',
      description: 'View assigned assets',
      action: () => navigate('/assets'),
      icon: <Package className="h-4 w-4" />,
    },
    {
      title: 'Purchase Request',
      description: 'Request new equipment',
      action: () => navigate('/purchases/new'),
      icon: <FileText className="h-4 w-4" />,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return { text: 'Approved', variant: 'default' as const };
      case 'pending':
        return { text: 'Pending', variant: 'secondary' as const };
      case 'assigned':
        return { text: 'Assigned', variant: 'outline' as const };
      case 'available':
        return { text: 'Available', variant: 'default' as const };
      default:
        return { text: status, variant: 'outline' as const };
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your overview.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Leave Balance"
          value="18"
          description="Days remaining"
          icon={<Calendar className="h-4 w-4" />}
          onClick={() => navigate('/leave')}
        />
        <DashboardCard
          title="Pending Requests"
          value="2"
          description="Awaiting approval"
          icon={<Clock className="h-4 w-4" />}
          badge={{ text: 'Action needed', variant: 'secondary' }}
          onClick={() => navigate('/leave/my')}
        />
        <DashboardCard
          title="Assets Assigned"
          value="4"
          description="Equipment & devices"
          icon={<Package className="h-4 w-4" />}
          onClick={() => navigate('/assets')}
        />
        <DashboardCard
          title="This Month"
          value="21"
          description="Attendance days"
          icon={<CheckCircle className="h-4 w-4" />}
          trend={{ value: 5, label: 'vs last month', isPositive: true }}
        />
      </div>

      {/* Quick Actions & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks you can perform
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-card-hover cursor-pointer transition-colors"
                onClick={action.action}
              >
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-lg bg-primary-light flex items-center justify-center">
                    {action.icon}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{action.title}</p>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Go →
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest updates and notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-primary-light flex items-center justify-center mt-1">
                  {activity.type === 'leave' && <Calendar className="h-4 w-4" />}
                  {activity.type === 'asset' && <Package className="h-4 w-4" />}
                  {activity.type === 'payroll' && <DollarSign className="h-4 w-4" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-foreground">{activity.title}</p>
                    <Badge {...getStatusBadge(activity.status)} />
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};