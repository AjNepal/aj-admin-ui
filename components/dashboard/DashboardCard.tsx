import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className='bg-slate-100 dark:bg-slate-800'>
      <CardContent>
        <h3 className='text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200'>
          {/* Posts */}
          {title}
        </h3>
        <div className='flex gap-5 mt-4 justify-center items-center'>
          {/* <Newspaper className='text-slate-500' size={40} /> */}
          {icon}
          <h3 className='text-4xl font-semibold text-slate-500 dark:text-slate-200'>
            {/* 100 */}
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
