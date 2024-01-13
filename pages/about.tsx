// // pages/about.tsx
// import React from 'react';
// import Head from 'next/head';
// import Link from 'next/link'; 

// const projects = [
//     {
//       title: 'My personal Github Page',
//       description: 'An Airtag tracking project with the intent to help UCSC track their busses more accurately',
//       link: 'https://github.com/vharkins1',
//     },
//     {
//       title: 'My School Stuff',
//       description: "The projects that I've done for school",
//       link: '(Current link inactive)',
//     },
//     {
//       title: 'This website',
//       description: "This is the repo I'm using to for this website, using Github pages",
//       link: 'https://github.com/vharkins1/vharkins1.github.io',
//     },
//     // Add more projects here
//   ];

// const AboutPage: React.FC = () => {
//   return (
//     <div className="container">
//     <header>
//     <h1>Welcome to Vincent&apos;s Computer Engineering Portfolio</h1>
//     <p className="tagline">Passionate computer engineer exploring exciting projects.</p>
//   </header>

//   <section id="about">
//     <h2>About Me</h2>
//     <p>
//       Hello, I&apos;m Vincent Harkins, a 20-year-old computer engineering major with a passion for technology and a drive to excel.
//       I am enthusiastic about exploring opportunities, both in internships and jobs, to apply my skills and contribute to innovative projects.
//     </p>
//   </section>

//   <section id="contact">
//     <h2>Contact Me</h2>
//     <p className="indent">
//       If you&apos;d like to get in touch or discuss potential opportunities, feel free to reach out to me.
//       I&apos;m always open to new connections and collaborations.
//     </p>
//   </section>

//   <section id="more">
//     <h2>More Stuff:</h2>
//     <ul className="projects-list">
//       {projects.map((project, index) => (
//         <li key={index} className="project">
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <a href={project.link} target="_blank" rel="noopener noreferrer">
//             View Project
//           </a>
//         </li>
//       ))}
//     </ul>
//   </section>
//     <Link href="/">
//         <button>Go to Home Page</button>
//     </Link>

//   <footer>
//     <p>Contact: ninjaharkins@gmail.com</p>
//   </footer>

//   <style jsx>{`
//     .container {
//       max-width: 1050px;
//       margin: 0 auto;
//       padding: 40px;
//       /*font-family: "Comic Sans MS", "Comic Sans", cursive;*/
//       font-family: 'Arial', sans-serif;
//       background-color: #282c34; // Dark theme background
//       border-radius: 8px; // Smooth edges
//     }

//     header {
//       text-align: center;
//       margin-bottom: 20px;
//       padding: 20px 0;
//       background-color: #20232a; // Slightly darker header background
//       border-radius: 8px 8px 0 0; // Rounded top edges
//     }

//     h1 {
//       font-size: 2em; 
//       margin-bottom: 10px;
//     }

//     .tagline {
//       font-size: 1.2em;
//       color: #777;
//     }

//     section {
//       margin-bottom: 30px;
//     }

//     h2 {
//       font-size: 1.5em;
//       margin-bottom: 10px;
//     }

//     p {
//       line-height: 1.6;
//     }

//     .indent {
//       margin-left: 20px;
//     }

//     .projects-list {
//       list-style: none;
//       padding: 0;
//     }

//     .project {
//       margin-bottom: 20px;
//       border: 5px solid grey;
//       padding: 10px;
//       border-radius: 5px;
//     }

//     a {
//       color: #0770f3;
//       text-decoration: none;
//     }

//     a:hover {
//       text-decoration: underline;
//     }

//     footer {
//       text-align: center;
//       margin-top: 30px;
//     }
//   `}</style>
// </div>
// );
// };
//export default AboutPage;

