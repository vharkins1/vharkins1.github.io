// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import TopMenu from '../components/TopMenu';

const experience = [
  {
    title: 'Neuromorphic Computing Group Research Assistant',
    organization: 'UC Santa Cruz',
    period: 'September 2025 – Present',
    bullets: [
      'Implementing and testing parallel cumulative sum operations in snnTorch for faster spiking neural network computation',
      'Contributing to GPU energy profiling to analyze power use during AI model inference',
      'Engaging in weekly discussions to propose scalable and efficient approaches for neuromorphic algorithms',
    ],
  },
  {
    title: 'Learning Support Services (LSS) Tutor',
    organization: 'UC Santa Cruz',
    period: 'January 2025 – June 2025',
    bullets: [
      'Tutored students in logic design (CSE 100) at UCSC',
      'Held 3 sessions a week tutoring around half a dozen students',
      'Effectively designed course material to support students building their confidence and performance',
    ],
  },
  {
    title: 'Web Developer',
    organization: 'Smart Politics (Non-Profit)',
    period: 'June 2024 – January 2025',
    bullets: [
      'Created a website for Smart Politics, a non-profit connecting people despite political beliefs',
      'Worked with a project manager to integrate socials and newsletter plugins',
      'Developed proficiency with Wix and translating project goals into deliverables',
    ],
  },
];

const skills = [
  { category: 'Languages', items: ['C', 'C++', 'Python', 'Swift', 'JavaScript', 'TypeScript', 'Java', 'C#', 'Bash'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'React Native', 'HTML/CSS', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Firebase', 'PostgreSQL', 'REST APIs', 'Vercel'] },
  { category: 'Tools', items: ['Git', 'Linux', 'VS Code', 'Vivado', 'Jekyll'] },
];

const coursework = [
  'Programming Abstractions',
  'Data Structures and Algorithms',
  'Computer Systems and C Programming',
  'Computer Architecture',
  'Computer Systems and Assembly Language',
  'Introduction to Computer Networks',
  'Network Programming',
  'Capstone Project I & II',
];

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <Head>
        <title>About - Vincent Harkins</title>
        <meta name="description" content="Vincent Harkins - Computer Science andEngineering student at UC Santa Cruz, pursuing B.S. and M.S. degrees." />
      </Head>

      <header className="header">
        <div className="hero-banner">
          <Image
            src="/images/santa-cruz-map.png"
            alt="Santa Cruz illustrated map"
            fill
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1>About</h1>
            <p className="hero-tagline">Computer Science and Engineering Student</p>
            <div className="hero-nav">
              <TopMenu />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="section">
        <div className="section-header">
          <h2>About</h2>
          <span className="tag tag-accent">Open to Work</span>
        </div>

        <div className="about-grid">
          <div className="photo-container">
            <Image
              src="/images/vincent-profile.jpg"
              alt="Vincent Harkins"
              width={200}
              height={200}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              priority
            />
          </div>

          <div className="about-content">
            <p>
              Computer Engineering student at UC Santa Cruz, currently pursuing my M.S. degree 
              with an expected graduation of June 2026.
            </p>
            <p>
              Currently working as a Research Assistant in the Neuromorphic Computing Group, focusing on
              spiking neural networks and GPU energy profiling for AI workloads.
            </p>

            <div className="details-grid">
              <div className="detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">Santa Cruz, CA 95060</span>
              </div>
              <div className="detail">
                <span className="detail-label">Email</span>
                <a href="mailto:vincenttharkins@gmail.com" className="detail-value link">
                  vincenttharkins@gmail.com
                </a>
              </div>
              <div className="detail">
                <span className="detail-label">Website</span>
                <a href="https://vharkins1.github.io" className="detail-value link">
                  vharkins1.github.io
                </a>
              </div>
              <div className="detail">
                <span className="detail-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/vincent-harkins-060a4426b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value link"
                >
                  vincent-harkins
                </a>
              </div>
              <div className="detail">
                <span className="detail-label">LeetCode</span>
                <a
                  href="https://leetcode.com/vincentharkins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value link"
                >
                  vincentharkins
                </a>
              </div>
              <div className="detail detail-resume">
                <span className="detail-label">Resume</span>
                <a
                  href="/Vincent_Harkins_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value link"
                >
                  Download PDF &darr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="section-header">
          <h2>Education</h2>
          <span className="tag">UC Santa Cruz</span>
        </div>

        <div className="education-content">
          <div className="degree">
            <h3>Bachelor of Science (B.S.) in Computer Engineering</h3>
            <span className="mono period">September 2021 – June 2025</span>
          </div>
          <div className="degree">
            <h3>Master of Science (M.S.) in Computer Science and Engineering</h3>
            <span className="mono period">Expected December 2026</span>
          </div>

          <div className="coursework-section">
            <h4>Relevant Coursework</h4>
            <div className="coursework-grid">
              {coursework.map((course) => (
                <span key={course} className="coursework-item">{course}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section">
        <div className="section-header">
          <h2>Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item card">
              <div className="experience-header">
                <div>
                  <h3>{exp.title}</h3>
                  <span className="organization">{exp.organization}</span>
                </div>
                <span className="mono period">{exp.period}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <div className="section-header">
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="skill-group card card-muted">
              <h3>{group.category}</h3>
              <ul className="skill-list">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p>
            Interested in working together? Have a question?
            Drop me an email.
          </p>
          <a href="mailto:vincenttharkins@gmail.com" className="btn btn-primary">
            Send Email
          </a>
        </div>
      </section>

      <footer className="page-footer">
        <span>Vincent Harkins</span>
        <span className="mono">2026</span>
      </footer>

      <style jsx>{`
        .header {
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

        .header h1 {
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

        /* Sections */
        .section {
          padding: var(--space-4);
          border-bottom: 1px solid var(--color-border);
        }

        .section:last-of-type {
          border-bottom: none;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-3);
          padding-bottom: var(--space-2);
          border-bottom: 1px solid var(--color-border);
        }

        .section-header h2 {
          font-size: var(--text-lg);
          font-weight: 600;
        }

        /* About Grid */
        .about-grid {
          display: flex;
          gap: var(--space-4);
          align-items: flex-start;
        }

        .photo-container {
          width: 200px;
          height: 200px;
          border: 3px solid var(--color-border);
          border-radius: 50%;
          overflow: hidden;
          background: var(--color-stone);
          flex-shrink: 0;
        }

        .about-content p {
          margin-bottom: var(--space-2);
          color: var(--color-fg);
        }

        .details-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          margin-top: var(--space-3);
          padding-top: var(--space-3);
          border-top: 1px solid var(--color-border);
        }

        .detail {
          display: flex;
          gap: var(--space-2);
        }

        .detail-label {
          min-width: 80px;
          font-family: var(--font-mono);
          font-size: var(--text-xs);
          text-transform: uppercase;
          color: var(--color-fg-muted);
        }

        .detail-value {
          color: var(--color-fg);
        }

        .detail-resume {
          margin-top: var(--space-2);
          padding-top: var(--space-2);
          border-top: 1px dashed var(--color-border);
        }

        .detail-resume .link {
          font-weight: 500;
          color: var(--color-sage-dark);
        }

        /* Education */
        .education-content {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .degree {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-2) 0;
          border-bottom: 1px dashed var(--color-border);
        }

        .degree h3 {
          font-size: var(--text-base);
          font-weight: 600;
        }

        .period {
          color: var(--color-fg-muted);
          font-size: var(--text-xs);
        }

        .coursework-section {
          margin-top: var(--space-2);
        }

        .coursework-section h4 {
          font-size: var(--text-sm);
          font-weight: 600;
          color: var(--color-sage-dark);
          margin-bottom: var(--space-2);
        }

        .coursework-grid {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-1);
        }

        .coursework-item {
          display: inline-block;
          padding: 4px 10px;
          background: var(--color-stone);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          font-size: var(--text-xs);
          color: var(--color-fg);
        }

        /* Experience */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .experience-item {
          padding: var(--space-3);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--space-2);
        }

        .experience-header h3 {
          font-size: var(--text-base);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .organization {
          font-size: var(--text-sm);
          color: var(--color-sage-dark);
        }

        .experience-bullets {
          list-style: none;
          padding-left: 0;
        }

        .experience-bullets li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 8px;
          font-size: var(--text-sm);
          color: var(--color-fg-muted);
          line-height: 1.6;
        }

        .experience-bullets li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--color-sage);
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: var(--space-2);
        }

        .skill-group h3 {
          font-size: var(--text-sm);
          font-weight: 600;
          margin-bottom: var(--space-2);
          color: var(--color-sage-dark);
        }

        .skill-list {
          list-style: none;
        }

        .skill-list li {
          padding: 6px 0;
          border-bottom: 1px dashed var(--color-border);
          font-size: var(--text-sm);
        }

        .skill-list li:last-child {
          border-bottom: none;
        }

        /* Contact */
        .contact-section {
          border-bottom: none;
        }

        .contact-card {
          background: var(--color-stone);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: var(--space-4);
          text-align: center;
        }

        .contact-card h2 {
          margin-bottom: var(--space-2);
        }

        .contact-card p {
          margin: 0 auto var(--space-3);
          color: var(--color-fg-muted);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-banner {
            height: 240px;
          }

          .about-grid {
            grid-template-columns: 1fr;
          }

          .photo-container {
            max-width: 280px;
          }

          .degree {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }

          .experience-header {
            flex-direction: column;
            gap: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
