import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-10'>
        <DashboardCard
          title='Posts'
          count={150}
          icon={<Newspaper className='text-slate-500' size={40} />}
        />
        <DashboardCard
          title='Categories'
          count={130}
          icon={<Folder className='text-slate-500' size={40} />}
        />
        <DashboardCard
          title='Users'
          count={24}
          icon={<User className='text-slate-500' size={40} />}
        />
        <DashboardCard
          title='Comments'
          count={740}
          icon={<MessageCircle className='text-slate-500' size={40} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Posts' limit={5} />
      <div className='text-right font-semibold'>
        <Link href='/posts' className='underline hover:no-underline'>
          All Posts
        </Link>
      </div>
    </>
  );
}
