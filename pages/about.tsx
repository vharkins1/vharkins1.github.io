// pages/about.tsx

import React from 'react';
import Head from 'next/head';
import Link from 'next/link'; 

const projects = [
    {
      title: 'Web-based CPU Simulator',
      description: 'A web application that simulates the operation of a CPU.',
      link: 'https://github.com/vharkins1',
    },
    {
      title: 'Real-time Data Visualization Dashboard',
      description: 'A dashboard for visualizing real-time data using React and D3.js.',
      link: 'https://github.com/vharkins1',
    },
    {
      title: 'Operating System Kernel Development',
      description: 'Contributions to an open-source operating system kernel project.',
      link: 'https://github.com/vharkins1',
    },
    // Add more projects here
  ];

const AboutPage: React.FC = () => {
  return (
    <div className="container">
    <header>
    <h1>Welcome to Vincent&apos;s Computer Engineering Portfolio</h1>
    <p className="tagline">Passionate computer engineer exploring exciting projects.</p>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>
      Hello, I&apos;m Vincent Harkins, a 20-year-old computer engineering major with a passion for technology and a drive to excel.
      I am enthusiastic about exploring opportunities, both in internships and jobs, to apply my skills and contribute to innovative projects.
    </p>
    {/* Add the rest of the "About Me" content */}
  </section>

  <section id="contact">
    <h2>Contact Me</h2>
    <p className="indent">
      If you&apos;d like to get in touch or discuss potential opportunities, feel free to reach out to me.
      I&apos;m always open to new connections and collaborations.
    </p>
    {/* Add the rest of the "Contact Me" content */}
  </section>

  <section id="more">
    <h2>More Stuff:</h2>
    <ul className="projects-list">
      {projects.map((project, index) => (
        <li key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </li>
      ))}
    </ul>
  </section>
    <Link href="/">
        <button>Go to Home Page</button>
    </Link>

  <footer>
    <p>Contact: ninjaharkins@gmail.com</p>
  </footer>

  <style jsx>{`
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 20px;
      font-family: 'Arial', sans-serif;
      background-color: #aa0a0f0;
      color: #999;
    }

    header {
      text-align: center;
      margin-bottom: 20px;
    }

    h1 {
      font-size: 2em; 
      margin-bottom: 10px;
    }

    .tagline {
      font-size: 1.2em;
      color: #777;
    }

    section {
      margin-bottom: 30px;
    }

    h2 {
      font-size: 1.5em;
      margin-bottom: 10px;
    }

    p {
      line-height: 1.6;
    }

    .indent {
      margin-left: 20px;
    }

    .projects-list {
      list-style: none;
      padding: 0;
    }

    .project {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      padding: 10px;
      border-radius: 5px;
    }

    a {
      color: #0770f3;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    footer {
      text-align: center;
      margin-top: 30px;
    }
  `}</style>
</div>
);
};
export default AboutPage;