// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TopMenu from '../components/TopMenu';
import ObfuscatedEmail from '../components/ObfuscatedEmail';

// Encoded email: vincenttharkins@gmail.com (shift cipher +3)
const ENCODED_EMAIL = 'ylqfhqwwkdunlqvCjpdlo1frp';

const projects = [
  {
    title: 'FireForm',
    description: 'Voice-to-form AI for firefighters. Speak naturally and a local LLM fills out your paperwork. Hackathon winner.',
    tech: ['Python', 'TypeScript', 'Local LLM'],
    status: 'Completed',
    color: '#e74c3c',
    image: '/images/fireform-screenshot.png',
    link: 'https://github.com/elnisha/rte2025',
  },
  {
    title: 'Angry Uncle Bot',
    description: 'A ChatGPT wrapper with engineered prompts for a very specific conversational tone.',
    tech: ['React', 'Vite', 'OpenAI API'],
    status: 'Active',
    color: '#f39c12',
    image: '/images/angry-uncle-screenshot.png',
    link: 'https://angry-uncle-bot.vercel.app/',
  },
  {
    title: 'Neuromorphic Research',
    description: 'Implementing parallel operations in snnTorch for faster spiking neural network computation.',
    tech: ['Python', 'snnTorch', 'CUDA'],
    status: 'Active',
    color: '#9b59b6',
    image: '/images/ncg-group-photo.jpg',
    link: 'https://ncg.ucsc.edu/',
  },
  {
    title: 'SlugCruise',
    description: 'Ride-sharing app for UCSC students. Built at a hackathon.',
    tech: ['React', 'Vercel'],
    status: 'Completed',
    color: '#3498db',
    image: '/images/slugcruise-screenshot.png',
    link: 'https://slugcruise.vercel.app/',
  },
  {
    title: 'Spotify to YouTube Music',
    description: 'Playlist converter using OAuth 2.0 and serverless functions.',
    tech: ['React', 'Vite', 'Vercel'],
    status: 'Completed',
    color: '#1db954',
    image: '/images/spotify-converter-screenshot.png',
    link: 'https://summerprojects.vercel.app/',
  },
  {
    title: 'Santa Cruz Events',
    description: 'Local event finder powered by a custom webscraper. Aggregates events happening around Santa Cruz.',
    tech: ['React', 'Web Scraping'],
    status: 'Completed',
    color: '#27ae60',
    image: '/images/santa-cruz-events.png',
    link: 'https://relaxed-crepe-a18d1f.netlify.app/',
  },
  {
    title: 'Smart Pill Dispenser',
    description: 'Mobile app for a smart pill dispenser system with Firestore backend.',
    tech: ['React Native', 'Firebase'],
    status: 'Completed',
    color: '#e8f4f8',
    image: '/images/pill-dispenser.png',
    contain: true,
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="page-container">
      <Head>
        <title>Vincent Harkins</title>
        <meta name="description" content="Projects and work by Vincent Harkins" />
      </Head>

      <header className="hero">
        <div className="hero-banner">
          <Image
            src="/images/santa-cruz-map.png"
            alt="Santa Cruz illustrated map"
            fill
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>Vincent Harkins</h1>
            <p className="hero-tagline">Things I&apos;ve built and worked on</p>
            <div className="hero-nav">
              <TopMenu />
            </div>
          </div>
        </div>
      </header>

      <section className="projects-section">
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const cardContent = (
              <>
                <div
                  className="project-visual"
                  style={{ backgroundColor: project.contain ? project.color : (project.image ? undefined : project.color) }}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{
                        objectFit: project.contain ? 'contain' : 'cover',
                        padding: project.contain ? '12px' : undefined
                      }}
                    />
                  ) : (
                    <span className="project-initial">{project.title[0]}</span>
                  )}
                </div>
                <div className="project-info">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    {project.status === 'Active' && <span className="status-dot" />}
                    {project.link && <span className="link-indicator">&rarr;</span>}
                  </div>
                  <p>{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </>
            );

            return project.link ? (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card project-card-link"
              >
                {cardContent}
              </a>
            ) : (
              <div key={idx} className="project-card">
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="page-footer">
        <ObfuscatedEmail encoded={ENCODED_EMAIL} />
        <span className="mono">2026</span>
      </footer>

      <style jsx>{`
        .hero {
          border-bottom: 1px solid var(--color-border);
        }

        .hero-banner {
          position: relative;
          height: 360px;
          width: 100%;
          overflow: hidden;
        }

        .hero-banner :global(img) {
          object-fit: cover;
          object-position: center 30%;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.5) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-4);
          z-index: 2;
        }

        .hero h1 {
          margin-bottom: var(--space-1);
          color: white;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        .hero-tagline {
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--text-base);
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          margin-bottom: var(--space-3);
        }

        .hero-nav {
          margin-top: var(--space-2);
        }

        .projects-section {
          padding: var(--space-4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-3);
        }

        .project-card,
        .projects-grid :global(.project-card-link) {
          display: block;
          background: var(--color-stone);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color 0.15s ease;
          text-decoration: none;
          color: inherit;
        }

        .project-card:hover,
        .projects-grid :global(.project-card-link:hover) {
          border-color: var(--color-sage);
        }

        .project-visual {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .project-initial {
          font-size: 48px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .project-info {
          padding: var(--space-3);
        }

        .project-header {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          margin-bottom: var(--space-1);
        }

        .project-header h3 {
          font-size: var(--text-base);
          font-weight: 600;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: var(--color-sage);
          border-radius: 50%;
        }

        .link-indicator {
          margin-left: auto;
          color: var(--color-fg-muted);
          font-size: var(--text-sm);
        }

        .project-info p {
          font-size: var(--text-sm);
          color: var(--color-fg-muted);
          margin-bottom: var(--space-2);
          line-height: 1.5;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          padding: 2px 8px;
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          color: var(--color-fg-muted);
        }

        @media (max-width: 600px) {
          .hero-banner {
            height: 240px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .cta-section {
            flex-direction: column;
            gap: var(--space-2);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
