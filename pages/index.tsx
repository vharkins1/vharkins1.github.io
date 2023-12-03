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

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to the River Street Crew</h1>
      <p className="tagline">A place of friends, and hopefully warmth, and maybe food. (These are trying times after all) </p>
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
      {/* Add a button to navigate to the About page */}
      <Link href="/about">
        <button>Go to About Page</button>
      </Link>
      
      <Link href="https://lewis-whitehill.github.io/mywebsite/">
        <button>LEWIS&apos;S WEBSITE</button>
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
          color: #fff;
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
