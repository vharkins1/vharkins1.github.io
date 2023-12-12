// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; 

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
      {/* Add a button to navigate to the About page */}
      <Link href="/about">
        <a>
          <button>Go to About Page</button>
        </a>
      </Link>
    </div>
    
  );
}

const TopMenu = () => {
  return (
    <>
      <Link href="https://lewis-whitehill.github.io/mywebsite/" className="menu-link" style={{ marginRight: '20px' }}>
        Lewis&apos;s Website
      </Link>
      <Link href="/about" className="menu-link">
        About Page
      </Link>
    </>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the River Street Crew</h1>
        <p className="tagline">A place of friends, and hopefully warmth, and maybe food. (These are trying times after all) </p>
        <TopMenu />
      </header>
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
      <Image
        src="/images/Zachary.jpg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/J-LAN.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/RawRaph.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/Raphinmotion.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/McEds.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/Clarence.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/burritoZach.jpeg"  // Adjust the path based on your folder structure
        alt="My Image"
        width={320}  // Set the width of the image
        height={410} // Set the height of the image
      /> 
      <Image
        src="/images/JCdunk.jpeg"  // Adjust the path based on your folder structure
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
      <footer>
        <p>Contact: ninjaharkins@gmail.com</p>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Arial', sans-serif;
          background-color: #282c34; // Dark theme background
          color: #ffffff; // Light text for contrast
          border-radius: 8px; // Smooth edges
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Subtle shadow for depth
        }

        header {
          text-align: center;
          margin-bottom: 20px;
          padding: 20px 0;
          background-color: #20232a; // Slightly darker header background
          border-radius: 8px 8px 0 0; // Rounded top edges
        }

        h1 {
          font-size: 2.5em; // Slightly larger title
          color: #61dafb; // Bright accent color for the title
          margin-bottom: 10px;
        }

        .tagline {
          font-size: 1.2em;
          color: #bbc2d8; // Softer color for less emphasis
        }

        h2 {
          font-size: 1.5em;
          margin-bottom: 10px;
          color: #61dafb; // Consistent accent color
        }

        p {
          line-height: 1.6;
          color: #abb2bf; // Lighter text for readability
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
          border: 1px solid #3a3f45; // Subtle border color
          padding: 10px;
          border-radius: 5px;
          background-color: #32363e; // Slightly lighter project background
        }

        a {
          color: #61dafb; // Bright link color for contrast
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
          color: #ffffff; // White color on hover for visibility
        }
        
      `}</style>

    </div>
  );
};

export default HomePage;
