// pages/index.tsx
import React, {useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'; 
import styles from '../styles/Home.module.css';
import { useSpecialMessage } from '../context/SpecialMessageContext';
import LikeButton from './LikeButton';
import ImageWithLikeButton from './ImageWithLikeButton';
require('dotenv').config();

const TopMenu = () => {
  return (
    <>
        <Link href="/" className={styles['menu-link']} style={{ marginRight: '20px' }}>
          Home
        </Link>

        <Link href="/about" className={styles['menu-link']}>
          About Page
        </Link>
    </>
  );
};




const HomePage: React.FC = () => {

 
 
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
          <ImageWithLikeButton src='/images/myImage.jpg'/>
          <span className="hover-text">The first photo added to this website, this was taken after barging into Bryce and Raph&apos;s room</span>
        </div>
        <div className="image-hover-container">
          <ImageWithLikeButton src='/images/myImage.jpg'/>
          <span className="hover-text">The first photo added to this website, this was taken after barging into Bryce and Raph&apos;s room</span>
        </div>
        <div className="image-hover-container">
          <ImageWithLikeButton src='/images/myImage.jpg'/>
          <span className="hover-text">The first photo added to this website, this was taken after barging into Bryce and Raph&apos;s room</span>
        </div>
        <div className="image-hover-container">
          <ImageWithLikeButton src='/images/myImage.jpg'/>
          <span className="hover-text">The first photo added to this website, this was taken after barging into Bryce and Raph&apos;s room</span>
        </div>
        
    </div>

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
          flex-wrap: wrap; 
          justify-content: flex-start; /* Aligns items to the start of the container */
          gap: 0px;
        }
        
        .image-hover-container {
          position: relative;
          flex: 1; 
          max-width: 330px;
          margin: 15px 0px; 
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
          background-color: #282c34;
          color: #fff;
          text-align: center;
          padding: 10px 0;
          font-family: 'Arial', sans-serif;
          border-radius: 8px;
          margin-top: 40px; /* Add space above the footer */
        }

        a{
          color: #61dafb;
          text-decoration: none; /* Removes the underline */
        }

        a:hover{
          color: #f1dafb;
          text-decoration: underline; /* Adds underline on hover */
        }

        .image-button {
          position: absolute;
          top: 350px;
          left: 270px;
          /* Additional styling for your button */
        }

      `}</style>

    </div>
  );
};

export default HomePage;
