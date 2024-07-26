'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from 'next-themes';
import { FaCheck } from 'react-icons/fa6';
import { IoMoonOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

const ThemeToggleButton = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="fixed bottom-4 right-4 z-30">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" data-testid="theme-toggle-button">
            <MdOutlineWbSunny className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <IoMoonOutline className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" data-testid="dropdown-menu">
          <DropdownMenuItem data-testid="light" onClick={() => setTheme('light')}>
            {theme === 'light' && <FaCheck className="mr-2" />}
            Light
          </DropdownMenuItem>
          <DropdownMenuItem role="menuitem" data-testid="dark" onClick={() => setTheme('dark')}>
            {theme === 'dark' && <FaCheck className="mr-2" />}
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem role="menuitem" data-testid="system" onClick={() => setTheme('system')}>
            {theme === 'system' && <FaCheck className="mr-2" />}
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ThemeToggleButton;
