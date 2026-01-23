// pages/about.tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import TopMenu from '../components/TopMenu'; 

const projects = [
    {
      title: 'My personal Github Page',
      description: 'An Airtag tracking project with the intent to help UCSC track their busses more accurately',
      link: 'https://github.com/vharkins1',
    },
    {
      title: 'My School Stuff',
      description: "The projects that I've done for school",
      link: '(Current link inactive)',
    },
    {
      title: 'This website',
      description: "This is the repo I'm using to for this website, using Github pages",
      link: 'https://github.com/vharkins1/vharkins1.github.io',
    },
    // Add more projects here
  ];

const AboutPage: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Vincent&apos;s Portfolio</h1>
        <p className="tagline">Computer Engineer | Problem Solver | Tech Enthusiast</p>
        <TopMenu />
      </header>

      <div className="page-content">
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello, I&apos;m Vincent Harkins, a computer engineering major with a passion for technology and a drive to excel.
            I am enthusiastic about exploring opportunities, both in internships and jobs, to apply my skills and contribute to innovative projects.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>
            If you&apos;d like to get in touch or discuss potential opportunities, feel free to reach out to me.
            I&apos;m always open to new connections and collaborations.
          </p>
        </section>

        <section id="more">
          <h2>Projects</h2>
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
      </div>

      <footer className="page-footer">
        <p>Contact: <a href="mailto:ninjaharkins@gmail.com">ninjaharkins@gmail.com</a></p>
      </footer>

      <style jsx>{`
        section {
          margin-bottom: 30px;
        }

        h2 {
          font-size: 1.5em;
          color: #61dafb;
          margin-bottom: 15px;
        }

        h3 {
          color: #61dafb;
          margin-bottom: 8px;
        }

        p {
          line-height: 1.7;
          color: #ccc;
        }

        .projects-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .project {
          padding: 20px;
          border-radius: 8px;
          background-color: #2a2a3a;
        }

        .project a {
          display: inline-block;
          margin-top: 10px;
          color: #61dafb;
        }
      `}</style>
    </div>
  );
};
export default AboutPage;

