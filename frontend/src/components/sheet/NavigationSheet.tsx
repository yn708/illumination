'use client';
import { NavItems } from '@/components/navigation/NavItems';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/constants/navItems';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { CgMenuRight } from 'react-icons/cg';

export const NavigationSheet = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button className="rounded-full relative overflow-hidden group" size="icon" variant="ghost">
        <span className="absolute inset-y-0 right-0 w-0 bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-out group-hover:w-full"></span>
        <CgMenuRight className="size-6 transition-transform duration-300 ease-in-out group-data-[state=open]:-rotate-90 relative z-10" />
        <span className="sr-only">Toggle navigation menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent
      data-testid="navigation-sheet"
      className="w-full h-screen bg-white shadow-lg dark:bg-gray-950 rounded-l-3xl"
      side="right"
    >
      <VisuallyHidden>
        <DialogTitle>Navigation Menu</DialogTitle>
        <DialogDescription>This is the navigation menu</DialogDescription>
      </VisuallyHidden>
      <NavItems items={NAV_ITEMS} />
    </SheetContent>
  </Sheet>
);
