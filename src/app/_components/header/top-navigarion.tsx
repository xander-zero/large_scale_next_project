'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems: NavigationMenuItem[] = [
  {
    title: 'صفحه اصلی',
    href: '/',
  },
  {
    title: 'دوره ها',
    href: '/courses',
  },
  {
    title: 'بلاگ',
    href: '/blog',
  },
];

export const TopNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.title}>
            <Link
              href={item.href}
              className={`hover:text-primary transition-colors pb-2 ${
                isActive &&
                'border-b-2 dark:text-primary dark:border-primary/30'
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
