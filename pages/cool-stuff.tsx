// pages/cool-stuff.tsx

import Head from 'next/head';
import Link from 'next/link'; 


import React, { useState } from 'react';

const UserInputComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [displayText, setDisplayText] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setDisplayText(prevText => [inputValue, ...prevText]);
            setInputValue(''); // Clears the input field
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange}
                onKeyPress={handleKeyPress} // Added the key press event listener
                placeholder="Enter text here" 
            />
            <div>
                {displayText.map((text, index) => (
                    <p key={index}>{text}</p> // Display each line of text
                ))}
            </div>
        </div>
    );
};




const CoolStuff: React.FC = () => {
  return (
    <div className="container">
    <header>
    <h1>Welcome to Vincent&apos;s Trying Stuff Area</h1>
    <p className="tagline">Passionate computer engineer exploring exciting projects.</p>
  </header>
    <React.StrictMode>
    <UserInputComponent/>
    </React.StrictMode>

  <footer>
    <Link href="/">
      <button>Go to Home Page</button>
    </Link>
    <p>Contact: ninjaharkins@gmail.com</p>
  </footer>

  <style jsx>{`

    header {
      text-align: center;
      margin-bottom: 20px;
      padding: 20px 0;
      background-color: #20232a; // Slightly darker header background
      border-radius: 8px 8px 0 0; // Rounded top edges
    }
    p{
      color: #61dafb;
      text-decoration: none; /* Removes the underline */
    }

    p:hover{
      color: #f1dafb;
      text-decoration: underline; /* Adds underline on hover */
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
export default CoolStuff;