import { useNavigate } from 'react-router-dom';
import { Users, Calendar, CheckCircle, Clock, AlertTriangle, TrendingUp } from 'lucide-react';
import { DashboardCard } from './DashboardCard';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const ManagerDashboard = () => {
  const navigate = useNavigate();

  const pendingApprovals = [
    {
      id: 1,
      type: 'leave',
      employee: 'John Doe',
      title: 'Annual Leave Request',
      description: 'Dec 20-27, 2024 (5 days)',
      status: 'pending',
      priority: 'high',
      submittedDate: '2 days ago',
    },
    {
      id: 2,
      type: 'purchase',
      employee: 'Sarah Wilson',
      title: 'MacBook Pro Request',
      description: '$2,500 - Development',
      status: 'pending',
      priority: 'medium',
      submittedDate: '1 day ago',
    },
    {
      id: 3,
      type: 'leave',
      employee: 'Mike Johnson',
      title: 'Sick Leave',
      description: 'Dec 15, 2024 (1 day)',
      status: 'pending',
      priority: 'urgent',
      submittedDate: '4 hours ago',
    },
  ];

  const teamActivity = [
    {
      employee: 'John Doe',
      action: 'Submitted leave request',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      employee: 'Sarah Wilson',
      action: 'Completed asset return',
      time: '1 day ago',
      status: 'completed'
    },
    {
      employee: 'Mike Johnson',
      action: 'Updated profile information',
      time: '2 days ago',
      status: 'completed'
    },
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return { text: 'Urgent', variant: 'destructive' as const };
      case 'high':
        return { text: 'High', variant: 'secondary' as const };
      case 'medium':
        return { text: 'Medium', variant: 'outline' as const };
      default:
        return { text: priority, variant: 'outline' as const };
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Manager Dashboard</h1>
        <p className="text-muted-foreground">Manage your team and approve requests.</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Team Members"
          value="12"
          description="Active employees"
          icon={<Users className="h-4 w-4" />}
          onClick={() => navigate('/employees')}
        />
        <DashboardCard
          title="Pending Approvals"
          value="8"
          description="Require your action"
          icon={<Clock className="h-4 w-4" />}
          badge={{ text: 'Action needed', variant: 'secondary' }}
          onClick={() => navigate('/leave/team')}
        />
        <DashboardCard
          title="Approved Today"
          value="3"
          description="Leave & purchase requests"
          icon={<CheckCircle className="h-4 w-4" />}
          trend={{ value: 15, label: 'vs yesterday', isPositive: true }}
        />
        <DashboardCard
          title="Team Attendance"
          value="92%"
          description="This month average"
          icon={<TrendingUp className="h-4 w-4" />}
          trend={{ value: 3, label: 'vs last month', isPositive: true }}
        />
      </div>

      {/* Pending Approvals & Team Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Pending Approvals */}
        <Card className="enterprise-card xl:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Pending Approvals</CardTitle>
                <CardDescription>
                  Requests awaiting your decision
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/leave/team')}
              >
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="p-4 border border-border rounded-lg hover:bg-card-hover transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-medium text-foreground">{approval.title}</p>
                      <Badge {...getPriorityBadge(approval.priority)} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {approval.employee} • {approval.description}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Submitted {approval.submittedDate}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm" className="bg-success hover:bg-success/90">
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Team Activity */}
        <Card className="enterprise-card">
          <CardHeader>
            <CardTitle>Team Activity</CardTitle>
            <CardDescription>
              Recent team updates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {teamActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="h-8 w-8 rounded-full bg-primary-light flex items-center justify-center mt-1">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{activity.employee}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
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
            Common management tasks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/leave/team')}
            >
              <Calendar className="h-5 w-5" />
              <span>Review Leaves</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/employees')}
            >
              <Users className="h-5 w-5" />
              <span>Team Overview</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/purchases/team')}
            >
              <CheckCircle className="h-5 w-5" />
              <span>Purchase Approvals</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-20 flex-col space-y-2"
              onClick={() => navigate('/reports')}
            >
              <TrendingUp className="h-5 w-5" />
              <span>Team Reports</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};