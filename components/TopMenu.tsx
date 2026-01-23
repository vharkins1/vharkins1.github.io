import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TopMenu: React.FC = () => {
  const router = useRouter();

  const links = [
    { href: '/', label: 'Home', icon: '\u2302' },
    { href: '/about', label: 'About', icon: '\u2139' },
    { href: 'https://github.com/vharkins1?tab=repositories&sort=pushed', label: 'Github', icon: '\u2197', external: true },
  ];

  return (
    <>
      <nav className="nav">
        {links.map((link) => (
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <span className="nav-label">{link.label}</span>
              <span className="nav-icon">{link.icon}</span>
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${router.pathname === link.href ? 'active' : ''}`}
            >
              <span className="nav-label">{link.label}</span>
            </Link>
          )
        ))}
      </nav>

      <style jsx>{`
        .nav {
          display: flex;
          gap: var(--space-1);
          padding: var(--space-2) 0;
        }

        .nav :global(.nav-link) {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-fg-muted);
          background: var(--color-stone);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          text-decoration: none;
          transition: all 0.15s ease;

          /* Matte button finish */
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.5),
                      inset 0 -1px 0 rgba(0,0,0,0.03);
        }

        .nav :global(.nav-link:hover) {
          background: var(--color-stone-dark);
          border-color: var(--color-sage);
          color: var(--color-fg);
        }

        .nav :global(.nav-link.active) {
          background: var(--color-sage);
          border-color: var(--color-sage-dark);
          color: white;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),
                      inset 0 -1px 0 rgba(0,0,0,0.1);
        }

        .nav-icon {
          font-size: 0.9em;
          opacity: 0.7;
        }

        @media (max-width: 600px) {
          .nav {
            flex-wrap: wrap;
          }

          .nav :global(.nav-link) {
            padding: 8px 12px;
            font-size: var(--text-xs);
          }

          .nav-label {
            display: none;
          }

          .nav-icon {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default TopMenu;
