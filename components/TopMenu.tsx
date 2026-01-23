import React from 'react';
import Link from 'next/link';

const TopMenu: React.FC = () => {
  return (
    <>
      <nav className="top-menu">
        <Link href="/">Home</Link>
        <Link href="https://github.com/vharkins1?tab=repositories&sort=pushed">Github</Link>
        <Link href="/about">About</Link>
      </nav>

      <style jsx>{`
        .top-menu {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 15px;
          flex-wrap: wrap;
        }

        .top-menu :global(a) {
          color: #61dafb;
          text-decoration: none;
          padding: 5px 10px;
        }

        .top-menu :global(a:hover) {
          color: #f1dafb;
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default TopMenu;
