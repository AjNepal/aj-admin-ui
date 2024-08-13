import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div className='hidden md:block min-h-screen w-[300px] bg-slate-100 dark:bg-slate-700 mt-1'>
          <Sidebar />
        </div>
        <div className='w-full md:max-w-[1140px] p-5'>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
