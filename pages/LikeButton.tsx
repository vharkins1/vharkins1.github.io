import React, { useState } from 'react';
import Image from 'next/image';  // Assuming you're using Next.js for image optimization

const LikeButton: React.FC = () => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = (): void => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div onClick={handleLike} style={{ cursor: 'pointer' }}>
      {isLiked ? (
        <Image src="/images/Liked.png" alt="Liked" width={32} height={40} />
      ) : (
        <Image src="/images/unLiked.png" alt="Unliked" width={32} height={40} />
      )}
      {/* <span>{likes} {likes === 1 ? 'like' : 'likes'}</span> */}
    </div>
  );
};

export default LikeButton;
