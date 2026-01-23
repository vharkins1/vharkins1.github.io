// pages/reworking.tsx
import React from 'react';
import Head from 'next/head';
import ImageWithLikeButton from './ImageWithLikeButton';
import TopMenu from '../components/TopMenu';

const ReworkingPage: React.FC = () => {
  return (
    <div className="page-container">
      <Head>
        <title>In Progress | River Street Crew</title>
      </Head>

      <header className="page-header">
        <h1>Work In Progress</h1>
        <p className="tagline">New features and experiments coming soon!</p>
        <TopMenu />
      </header>

      <div className="page-content">
        <div className="flex-container">
          <div className="image-hover-container">
            <ImageWithLikeButton src='/images/myImage.jpg'/>
            <span className="hover-text">Testing the like button feature</span>
          </div>
          <div className="image-hover-container">
            <ImageWithLikeButton src='/images/image.jpg'/>
            <span className="hover-text">More experiments here</span>
          </div>
          <div className="image-hover-container">
            <ImageWithLikeButton src='/images/Zachary.jpg'/>
            <span className="hover-text">Stay tuned for updates</span>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>Contact me at <a href="mailto:ninjaharkins@gmail.com">ninjaharkins@gmail.com</a></p>
        <p>&copy; 2025 River Street Crew</p>
      </footer>

      <style jsx>{`
        .flex-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }
      `}</style>
    </div>
  );
};

export default ReworkingPage;
