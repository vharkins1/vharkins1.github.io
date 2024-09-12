import React from 'react';
import Image from 'next/image';
import LikeButton from './LikeButton';

interface ImageWithLikeButtonProps {
  src: string;
}

const ImageWithLikeButton: React.FC<ImageWithLikeButtonProps> = ({ src }) => {
  const defaultAlt = "Image with like button";
  const defaultWidth = 320;
  const defaultHeight = 400;

  return (
    <div style={{ position: 'relative', width: `${defaultWidth}px`, height: `${defaultHeight}px` }}>
      <Image 
        src={src} 
        alt={defaultAlt} 
        style={{ transition: '0.5s ease', opacity: 1 }} 
        onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} 
        onMouseOut={e => (e.currentTarget.style.opacity = '1')}
        width={defaultWidth} 
        height={defaultHeight} 
        layout="responsive" 
      />
      
      {/* LikeButton positioned on top of the image */}
      <div style={{ position: 'absolute', bottom: '0px', right: '20px' }}>
        <LikeButton />
      </div>
    </div>
  );
};

export default ImageWithLikeButton;
