import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
};
