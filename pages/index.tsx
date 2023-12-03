// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Your component
function MyComponent() {
  return (
    <div>
      {/* Use the Image component */}
      <Image
        src="/images/myImage.jpg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={300}  // Set the width of the image
        height={200} // Set the height of the image
      />
      <Image
        src="/images/myImage.jpg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={300}  // Set the width of the image
        height={200} // Set the height of the image
      />
      <Image
        src="/images/myImage.jpg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={300}  // Set the width of the image
        height={200} // Set the height of the image
      />
    </div>
    
  );
}

// Export your component
//export default MyComponent;

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


const HomePage: React.FC = () => {
  return (

    
    <div className="container">
      <Head>
        <title>Vincent&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="/images/myImage.jpg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={400} // Set the height of the image
      /> 
      <Image
        src="/images/VincentGPT.JPG"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={400} // Set the height of the image
      /> 
      <Image
        src="/images/JustBryce.PNG"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={400} // Set the height of the image
      /> 
      <Image
        src="/images/image.jpg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/lulu.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/Byrcewknife.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/Bryce's21st.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      
      
      {/* Add a video using the HTML5 video element */}
      <video width={320} height={410} controls>
       <source src="video/video.mp4" type="video/mp4"/>
       Your browser does not support the video tag.
      </video>
      {/* <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=gqBIsz4TiV4tIVbV&amp;start=2" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
      ></iframe>
      <blockquote class="tiktok-embed" 
        cite="https://www.tiktok.com/@github/video/7125239666843962629" 
          data-video-id="7125239666843962629" 
          style={{ maxWidth: '605px', minWidth: '325px' } as React.CSSProperties}>
          <section> 
            <a target="_blank" title="@github" href="https://www.tiktok.com/@github?refer=embed">@github</a> Deploy any static site to GitHub Pages! 
            <a title="github" target="_blank" href="https://www.tiktok.com/tag/github?refer=embed">#github</a> 
            <a target="_blank" title="♬ Magical Page - DJ BAI" href="https://www.tiktok.com/music/Magical-Page-6945116703516805121?refer=embed">♬ Magical Page - DJ BAI</a> 
          </section> 
          </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
     */}

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
          color: #333;
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
          color: #555;
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
          color: #0070f3;
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

export default HomePage;
