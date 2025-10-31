import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const TopMenu = () => {
  return (
    <nav>
      <Link href="https://summerprojects.vercel.app/" className={styles['menu-link']} style={{ marginRight: '20px' }}>
        Project
      </Link>
      <Link href="/about" className={styles['menu-link']} style={{ marginRight: '20px' }}>
        About Page
      </Link>
      <Link href="/cool-stuff" className={styles['menu-link']} style={{ marginRight: '20px' }}>
        Drawing
      </Link>
      <Link href="/reworking" className={styles['menu-link']} style={{ marginRight: '20px' }}>
        In Progress
      </Link>
      <Link href="/timeline" className={styles['menu-link']}>
        Timeline
      </Link>
    </nav>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export { TopMenu };
export default Layout;
