import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const TopMenu = () => {
  return (
    <nav>
      <Link href="https://summerprojects.vercel.app/" style={{ marginRight: '20px' }}>
        Project
      </Link>
      <Link href="/about" style={{ marginRight: '20px' }}>
        About Page
      </Link>
      <Link href="/cool-stuff" style={{ marginRight: '20px' }}>
        Drawing
      </Link>
      <Link href="/reworking" style={{ marginRight: '20px' }}>
        In Progress
      </Link>
      <Link href="/timeline">
        Timeline
      </Link>
    </nav>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <TopMenu />
      {children}
    </div>
  );
};

export { TopMenu };
export default Layout;
