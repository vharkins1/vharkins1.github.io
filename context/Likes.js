import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const Likes = ({special,title}) => {
    <div className="container">
    <Image src="/images/myImage.jpg" alt="Image 1" style={{ transition: '0.5s ease', opacity: 1 }} onMouseOver={e => (e.currentTarget.style.opacity = '0.2')} onMouseOut={e => (e.currentTarget.style.opacity = '1')} width={320} height={400}/>
    </div>
};

export default Likes;
