import { SheetClose } from '@/components/ui/sheet';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemsProps {
  items: {
    name: string;
    subitems: {
      name: string;
      href: string;
    }[];
  }[];
}

export function NavItems({ items }: NavItemsProps) {
  const pathname = usePathname();

  const menuVariants = {
    closed: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <motion.nav
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
      className="flex flex-col md:items-start items-center justify-start gap-10 h-full overflow-auto text-gray-700 dark:text-gray-200 p-10"
      role="navigation"
    >
      {items.map((category, index) => (
        <div key={index}>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {category.name}
          </h2>
          <ul>
            {category.subitems.map((item) => (
              <li key={item.href}>
                <SheetClose asChild>
                  <Link
                    href={item.href}
                    className={`mb-2 block transition-colors text-lg ${
                      pathname === item.href
                        ? 'text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.nav>
  );
}
