'use client';

import Link from 'next/link';
import styles from './Navigation.module.css';
import { usePathname } from 'next/navigation';
const links = [
  { label: 'Home', href: '/' },
  { label: 'Movies', href: '/movies' },
];
export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.list}>
        {links.map(link => (
          <li className={styles.navLink} key={link.label}>
            <Link className={styles.navLink} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
