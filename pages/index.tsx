// pages/index.tsx
import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from '../styles/Home.module.css';
import { useSpecialMessage } from '../context/SpecialMessageContext';

require('dotenv').config();

const TopMenu = () => {
  return (
    <>
        <Link href="https://summerprojects.vercel.app/" className={styles['menu-link']} style={{ marginRight: '20px' }}>
          Project
        </Link>

        <Link href="/about" className={styles['menu-link']} style={{ marginRight: '20px' }}>
          About Page
        </Link>

        <Link href="/cool-stuff" className={styles['menu-link']} style={{ marginRight: '20px' }}>
          Drawing
        </Link>

        <Link href="/reworking" className={styles['menu-link']}>
          In Progress
        </Link>
    </>
  );
};


const HomePage: React.FC = () => {
  //const { showSpecialMessage, setShowSpecialMessage } = useSpecialMessage(); 
  const [userResponse, setUserResponse] = useState('');
  // const handlePrompt = () => {
  //   let response = window.prompt('PLEASE BEWARE!');
  //   while(response !== '<333'){
  //     response = window.prompt('HAHAAHAHA');
  //   }
  // };

  return (
    <div className="container">
      <header>
        <h1>Welcome to The River Street Crew</h1>
        <p className="tagline">A place of friends, hopefully warmth, and maybe even food. (These are trying times after all) </p>
        {/* {showSpecialMessage && (<p className="tagline">I hoped you enjoyed my website, but like really you specifically I hoped you liked it!</p>)} */}

        <TopMenu />
      </header>
      
      <div className="flex-container">

        <div className="image-hover-container">
          <Image src="/images/myImage.jpg" alt="Image 1" style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} width={320} height={400}/>
          <span className="hover-text">The first photo added to this website, this was taken after barging into Bryce and Raph&apos;s room</span>
        </div>
        
          <div className="image-hover-container" >
            <Link href="/cool-stuff">
              <Image src="/images/VincentGPT.JPG" alt="Image 2" width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
              <span className="hover-text">This is a photo of me talking to ChatGPT, while in my muppets class</span>
            </Link>
          </div> 

        <div className="image-hover-container">
          <Image src="/images/image.jpg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">This is Bryce looking like the baller he is</span>
        </div>  

        <div className="image-hover-container">
          <Image src="/images/lulu.jpeg" alt="Image 2"width={320} height={400}style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Lewis(aka lulu) in his ikea bag outfit for Halloween!</span>
        </div>

        <div className="image-hover-container">
          <Image src="/images/Byrcewknife.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">This is Bryce while working on the muppets final</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/Bryce's21st.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Happy 21st Bryce you old ass motherf--. Naw I love you Bryce &#9825;</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/Zachary.jpg" alt="Image 2"width={320} height={400}style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Candid Zach I banged on his door to take this fine ass photo</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/J-LAN.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Had to add the boy Jalen to the website, and here he is just trying to enjoy his food</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/Raphinmotion.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Raph running at me for little to no reason</span>
        </div> 
        
        <div className="image-hover-container">
          <Image src="/images/RawRaph.jpeg" alt="Image 2"width={320} height={400}style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Totally barged into Raph and Bryce&apos;s room to get this one! Sorry Raph&#x263A;</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/McEds.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">TWO WHOLE BAGS OF MC DONALDS WOW! THX FOR THE DOORDASH LEWIS</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/Clarence.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Clarence while standing in front of totally accurate height marks on the wall behind him</span>
        </div> 

        <div className="image-hover-container">
          <Image src="/images/burritoZach.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">This is probably what Zach would look like as a burrito</span>
        </div>  
        
        <div className="image-hover-container">
          <Image src="/images/JCdunk.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">JC dunking the basketball showing his prominence and power!</span>
        </div> 
        <div className="image-hover-container">
          <Image src="/images/MaybeZachIsABurrito.jpg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">I was kidding before about Zach beinging a burrito, but after spotting him in the wild the mind kinda wonders</span>
        </div> 
        <div className="image-hover-container">
          <Image src="/images/BryceMandM.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Bryce as an M&M? HOLDING M&M&apos;s!</span>
        </div> 
        <div className="image-hover-container">
          <Image src="/images/ZachWithFrisbee.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Zach as the legendary frisbee player we all know him as</span>
        </div> 
        <div className="image-hover-container">
          <Image src="/images/StarbucksForJalens21st.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Jalen&apos;s 21 birthday, we got quirky and cool drinks twas lit! if only Jalen let me and Bryce pay the 50 cent tax for his cup smh. All Love &#9825;</span>
        </div>
        <div className="image-hover-container">
          <Image src="/images/BryceWithBalloons.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Just a good photo all around, Bryce is holding an obscene amount of small balloons</span>
        </div>
        <div className="image-hover-container">
          <Image src="/images/RaphInMotionAgain.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">I seem to only have Raph in motion, so here he is again in motion!</span>
        </div>
        <div className="image-hover-container">
          <Image src="/images/MasterOfChess.jpeg" alt="Image 2"width={320} height={400} style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} />
          <span className="hover-text">Bryce with poofy hair and a dope ass chess hat, yup</span>
        </div>
      </div>

      {/* <video width={320} height={410} controls>
       <source src="video/video.mp4" type="video/mp4"/>
       Your browser does not support the video tag.
      </video> */}

      <footer className="site-footer">
        <div className="footer-content">
          <p>Contact me at <a href="mailto:ninjaharkins@gmail.com">ninjaharkins@gmail.com</a></p>
          <p>If you got here good for you! You can click on the second image to access a special Page if I haven&apos;t changed it yet</p>
          <p>© 2024 River Street Crew</p>
        </div>
      </footer>

      <style jsx>{`
    
        .container {
          max-width: 1050px;
          margin: 0 auto;
          padding: 40px;
          /*font-family: "Comic Sans MS", "Comic Sans", cursive;*/
          font-family: 'Arial', sans-serif;
          background-color: #282c34; // Dark theme background
          border-radius: 8px; // Smooth edges
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
        
        .flex-container {
          display: flex;
          flex-wrap: wrap; /* This allows items to wrap onto the next line */
          justify-content: flex-start; /* Aligns items to the start of the container */
          gap: 0px;
        }
        
        .image-hover-container {
          position: relative;
          flex: 1; /* Allows the container to grow and shrink */
          max-width: 330px; /* Maximum width */
          margin: 0px; /* Spacing between containers */
          align-item: flex-start;
        }
      
        .image-hover-container:hover .hover-image {
          opacity: 0.6; // Image opacity change on hover
        }
      
        .hover-text {
            position: absolute;
            top: 50%;  // Center vertically
            left: 50%; // Center horizontally
            transform: translate(-50%, -50%);
            color: #faf0e6; // Choose a visible color
            font-size: 20px; // Adjust as needed
            text-align: center;
            opacity: 0; // Initially hidden
            transition: opacity .5s ease;
            pointer-events: none; // Prevents the text from interfering with image hover
            padding: 5px;
        }
        
        .image-hover-container:hover .hover-text {
            opacity: 1; // Text visible on hover
        }

        .site-footer {
          background-color: #282c34; /* Dark theme background */
          color: #fff; /* White text color for contrast */
          text-align: center; /* Center align the content */
          padding: 10px 0; /* Padding at the top and bottom */
          font-family: 'Arial', sans-serif; /* Consistent font family */
          border-radius: 8px; // Smooth edge
        }
        a{
          color: #61dafb;
          text-decoration: none; /* Removes the underline */
        }

        a:hover{
          color: #f1dafb;
          text-decoration: underline; /* Adds underline on hover */
        }

      `}</style>

    </div>
  );
};

export default HomePage;
