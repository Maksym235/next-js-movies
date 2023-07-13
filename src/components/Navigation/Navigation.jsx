'use client';

import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
import { NavList } from '../NavList/NavList';
const links = [
  { label: 'Home', href: '/' },
  { label: 'Movies', href: '/movies' },
];
export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <NavList pathname={pathname} links={links} />
    </nav>
  );
};
