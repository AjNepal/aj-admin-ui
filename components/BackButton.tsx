import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
  text: string;
  link: string;
}

const BackButton = ({ text, link }: BackButtonProps) => {
  return (
    <Link
      href={link}
      className='text-gray-500 hover:underline items-center gap-1 mb-5 flex'
    >
      <ArrowLeftCircle size={18} /> {text}
    </Link>
  );
};

export default BackButton;
