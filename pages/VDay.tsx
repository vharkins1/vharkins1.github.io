import React from 'react';
import Image from 'next/image';

// Define the structure for a photo object
interface Photo {
  src: string;
  caption: string;
}

// Sample array of photo objects
const photos: Photo[] = [
  //{ src: '/VDAY/01.jpeg', caption: 'You me, and some of my housemates ' },
  { src: '/VDAY/02.jpeg', caption: 'Our trip out to Point Reyes, which was a tremindous amount of hiking, and super fun' }, 
  { src: '/VDAY/03.jpeg', caption: 'One of the first photos of us I have, we look dead pale but I enjoyed our time in the forest' }, 
  { src: '/VDAY/04.jpeg', caption: 'First trip out to SF when we went up to the radio tower <3' }, 
  { src: '/VDAY/05.jpeg', caption: "Going to the Oakland Zoo, one of the better dates I've taken you on I love our time their'" }, 
  { src: '/VDAY/06.jpeg', caption: 'Dope fun cool happy times :)<3' }, 
  { src: '/VDAY/07.jpeg', caption: 'More forest photos :)' },  
  { src: '/VDAY/08.jpeg', caption: "While the Sharks might not be great right now, I'm glad we got to see Timo play, and also this was totally fun"},
  // Add your photos herea
];

const handlePageClick = (e: React.MouseEvent) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${e.pageX - 15}px`; // Adjust these values to center the heart on the cursor
  heart.style.top = `${e.pageY - 15}px`; // Adjust based on the heart size
  
  document.body.appendChild(heart);
  
  // Optional: remove the heart after a few seconds
  setTimeout(() => {
    heart.remove();
  }, 3000); // Adjust time as needed
};



const VDay: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null); // Add this line

  const handlePageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${e.clientX - 15}px`; // Adjust these values to center the heart on the cursor
    heart.style.top = `${e.clientY - 15}px`; // Adjust based on the heart size

    if (containerRef.current) {
      containerRef.current.appendChild(heart); // Adjust this line
    }

    // Optional: remove the heart after a few seconds
    setTimeout(() => {
      heart.remove();
    }, 3000); // Adjust time as needed
  };

  return (
    <>
      <style jsx>{`
        .body {
          background-color: #ffccd5; /* Soft pink */
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        }

        .heart {
          position: absolute;
          width: 30px;
          height: 30px;
          background-color: pink;
          transform: rotate(-45deg);
          transform-origin: center;
        }

        .heart::before,
        .heart::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: pink;
        }

        .heart::before {
          top: -15px;
          left: 0;
        }

        .heart::after {
          top: 0;
          left: 15px;
        }
      `}</style>
      <div onClick={handlePageClick} style={styles.container}>
        <h1 style={styles.app}>Our Valentine&apos;s Day Gallery</h1>
        <div style={styles.gallery}>
          {photos.map((photo, index) => (
            <div key={index} style={styles.photoEntry}>
              <Image src={photo.src} alt={photo.caption} layout='responsive' width={320} height={480} />
              <p style={styles.caption}>{photo.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};



// Styles
const styles = {

  container: {
    maxWidth: '1050px',
    margin: '0 auto',
    padding: '40px',
    fontFamily: "'Love Ya Like A Sister', cursive", // A more whimsical, romantic font
    backgroundColor: '#ffccdf', // A soft pink background for a Valentine's vibe
    borderRadius: '8px',
    color: '#fff', // White text for better contrast on the pink background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Soft shadow for depth
  },

  app: {
    textAlign: 'center' as const,
    color: '#333', // Darker text color for the title for contrast
  },

  gallery: {
    display: 'flex',
    flexDirection: 'row' as const, // Specify exact string literal types
    flexWrap: 'wrap' as const,
    justifyContent: 'center' as const,
    gap: '20px',
  },

  photoEntry: {
    width: '280px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)',
    margin: '8px',
    borderRadius: '10px', // Slightly more pronounced rounded corners
    overflow: 'hidden',
    position: 'relative' as const,
    border: '2px solid #933', // White border for each photo entry
  },

  image: {
    // Settings for Next.js Image component will be applied via parent div styles
  },

  caption: {
    padding: '5px',
    color: '#602437', // A deep red/maroon for the captions, enhancing the Valentine theme
    fontSize: '16px', // Slightly larger text for readability
    fontFamily: "'Indie Flower', cursive", // A more casual, handwritten font for captions
  },
};


export default VDay;
