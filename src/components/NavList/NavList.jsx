import styles from './NavList.module.css';
import Link from 'next/link';
export const NavList = ({ pathname, links }) => {
  return (
    <ul className={styles.list}>
      {links.map(link => {
        const isActive = pathname === link.href;
        return (
          <li className={styles.list_item} key={link.label}>
            <Link
              className={isActive ? styles.active : styles.navLink}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
