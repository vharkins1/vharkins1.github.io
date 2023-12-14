// pages/cool-stuff.tsx

import Head from 'next/head';
import Link from 'next/link'; 


import React, { useState } from 'react';

const UserInputComponent = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [displayText, setDisplayText] = useState<string[]>([]);
    const secretPassword = "<333>"; // Define your secret password here
    const [showSpecialMessage, setshowSpecialMessage] = useState<boolean>(false);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (inputValue === secretPassword) {
                // Perform your action here if the password is correct
                console.log("Password is correct!");
                // For example, you can display a special message
                setDisplayText(prevText => [...prevText, "Access Granted!"]);
            } else {
                // Handle the case where the input is not the secret password
                setDisplayText(prevText => [...prevText, inputValue]);
            }
            setInputValue(''); // Clears the input field
        }
    };

    return (
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={showSpecialMessage ? "Type something else..." : "Enter text here"}
            />
            <div>
                {displayText.map((text, index) => (
                    <p key={index}>{text}</p>
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
    {/*showSpecialMessage && <p className="tagline">I hoped you enjoyed my website, but like really you specifically I hoped you liked it!</p>*/}
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
