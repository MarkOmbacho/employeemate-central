import { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface DashboardCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: ReactNode;
  trend?: {
    value: number;
    label: string;
    isPositive: boolean;
  };
  badge?: {
    text: string;
    variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  };
  onClick?: () => void;
}

export const DashboardCard = ({
  title,
  value,
  description,
  icon,
  trend,
  badge,
  onClick,
}: DashboardCardProps) => {
  return (
    <Card 
      className={`metric-card cursor-pointer hover:shadow-md transition-shadow ${onClick ? 'hover:bg-card-hover' : ''}`}
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex items-center space-x-2">
          {badge && (
            <Badge variant={badge.variant || 'default'} className="text-xs">
              {badge.text}
            </Badge>
          )}
          <div className="h-4 w-4 text-muted-foreground">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="metric-value">{value}</div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
          </div>
          {trend && (
            <div className={`text-right ${trend.isPositive ? 'metric-change-positive' : 'metric-change-negative'}`}>
              <div className="flex items-center">
                <span className="text-lg mr-1">
                  {trend.isPositive ? '↗' : '↘'}
                </span>
                <span className="font-medium">
                  {Math.abs(trend.value)}%
                </span>
              </div>
              <div className="text-xs text-muted-foreground">
                {trend.label}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};