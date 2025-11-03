import React from 'react';
import Head from 'next/head';

const Timeline = () => {
  return (
    <>
      <Head>
        <title>My Personal Timeline</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-12 font-handwriting" style={{ color: 'var(--header-color)' }}>
          Timeline
        </h1>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Under Construction</h2>
          <p className="text-lg">This page is currently being updated. Please check back later!</p>
        </div>
      </div>
    </>
  );
};

export default Timeline;
