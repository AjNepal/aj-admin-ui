import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import {
  LayoutDashboard,
  Settings,
  StickyNote,
  ChartColumnStacked,
  PrinterCheck,
  UserPen,
} from 'lucide-react';
import Link from 'next/link';
const Sidebar = () => {
  return (
    <div>
      <Command className='rounded-none bg-slate-100 dark:bg-slate-700'>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            <CommandItem>
              <Link
                href='/'
                className='flex cursor-pointer w-full h-full pointer-events-auto hover:font-semibold'
              >
                <LayoutDashboard className='mr-2 h-4 w-4' />
                Dashboard
              </Link>
            </CommandItem>
            <CommandItem>
              <Link
                href='/posts'
                className='flex cursor-pointer w-full h-full pointer-events-auto hover:font-semibold'
              >
                <StickyNote className='mr-2 h-4 w-4' />
                Posts
              </Link>
            </CommandItem>
            <CommandItem>
              <Link
                href='/category'
                className='flex cursor-pointer w-full h-full pointer-events-auto hover:font-semibold'
              >
                <ChartColumnStacked className='mr-2 h-4 w-4' />
                Category
              </Link>
            </CommandItem>
            <CommandSeparator />
            <CommandItem>
              <Link
                href='/profile'
                className='flex cursor-pointer w-full h-full pointer-events-auto hover:font-semibold'
              >
                <UserPen className='mr-2 h-4 w-4' />
                Profile
              </Link>
            </CommandItem>
            <CommandItem>
              <Link
                href='/billings'
                className='flex cursor-pointer w-full h-full pointer-events-auto hover:font-semibold'
              >
                <PrinterCheck className='mr-2 h-4 w-4' />
                Billings
              </Link>
            </CommandItem>
            <CommandItem>
              <Link
                href='/settings'
                className='flex cursor-pointer w-full h-full pointer-events-auto hover:font-semibold'
              >
                <Settings className='mr-2 h-4 w-4' />
                Settings
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Sidebar;
