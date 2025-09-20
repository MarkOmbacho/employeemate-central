import { NavLink, useLocation } from 'react-router-dom';
import {
  Calendar,
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Settings,
  Home,
  LogOut,
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth, UserRole } from '@/lib/auth';

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: UserRole[];
}

const menuItems: MenuItem[] = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
    roles: ['Employee', 'Manager', 'HR', 'Admin', 'DepartmentHead'],
  },
  {
    title: 'Leave Management',
    url: '/leave',
    icon: Calendar,
    roles: ['Employee', 'Manager', 'HR', 'Admin', 'DepartmentHead'],
  },
  {
    title: 'Payroll',
    url: '/payroll',
    icon: DollarSign,
    roles: ['Employee', 'HR', 'Admin'],
  },
  {
    title: 'Assets',
    url: '/assets',
    icon: Package,
    roles: ['Employee', 'Manager', 'HR', 'Admin', 'DepartmentHead'],
  },
  {
    title: 'Purchase Requests',
    url: '/purchases',
    icon: ShoppingCart,
    roles: ['Employee', 'Manager', 'HR', 'Admin', 'DepartmentHead'],
  },
  {
    title: 'Employees',
    url: '/employees',
    icon: Users,
    roles: ['HR', 'Admin', 'Manager'],
  },
  {
    title: 'Reports',
    url: '/reports',
    icon: FileText,
    roles: ['Manager', 'HR', 'Admin', 'DepartmentHead'],
  },
];

export function AppSidebar() {
  const sidebar = useSidebar();
  const collapsed = sidebar.state === 'collapsed';
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    return isActive(path)
      ? 'bg-primary text-primary-foreground font-medium'
      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground';
  };

  const filteredMenuItems = menuItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-64'} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        {!collapsed && (
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Users className="h-4 w-4 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-sidebar-foreground">EMS</h2>
              <p className="text-xs text-sidebar-foreground/70">Employee Management</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex justify-center">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Users className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={getNavClassName(item.url)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {!collapsed && user && (
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.profilePicture} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  {getInitials(user.firstName, user.lastName)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sidebar-foreground truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-sidebar-foreground/70 truncate">
                  {user.role} • {user.department}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="flex-1 justify-start text-sidebar-foreground hover:bg-sidebar-accent"
                asChild
              >
                <NavLink to="/settings">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </NavLink>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={logout}
                className="text-sidebar-foreground hover:bg-sidebar-accent"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        {collapsed && user && (
          <div className="flex flex-col items-center space-y-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.profilePicture} />
              <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                {getInitials(user.firstName, user.lastName)}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="w-8 h-8 p-0 text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}