'use client';
import { NavigationSheet } from '@/components/sheet/NavigationSheet';
import Link from 'next/link';

const Header = () => {
  return (
    <header role="banner" className="bg-white dark:bg-gray-950">
      <div className="mx-auto flex h-12 w-full items-center justify-between px-3 md:h-16 lg:px-10">
        <Link className="flex items-center gap-2 px-8 text-sm font-semibold md:text-lg" href="/">
          illumination
        </Link>
        <NavigationSheet />
      </div>
    </header>
  );
};

export default Header;
