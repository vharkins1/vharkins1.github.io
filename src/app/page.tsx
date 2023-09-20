import React from 'react';
import Head from 'next/head'; // Import Head from Next.js
import './globals.css';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
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
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Include the Head component to set the favicon */}
      <Head>
        <link rel="icon" href="/public/V-Wiz.ico" />
        {/* Other meta tags and links can be added here */}
      </Head>

      <header>
        <h1>Welcome to Vincent's Computer Engineering Portfolio</h1>
        <nav>
          <ul className="menu">
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#photos">Photos</a></li>
            <li><a href="#more">More Pages</a></li>
          </ul>
        </nav>
        <p>Passionate computer engineer exploring exciting projects.</p>
      </header>

      <section id="more">
        <h2>More Pages</h2>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <p>Contact: vincent@example.com</p>
      </footer>
    </div>
  );
};

export default HomePage;
