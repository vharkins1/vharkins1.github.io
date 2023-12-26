// pages/cool-stuff.tsx

import Head from 'next/head';
import Link from 'next/link'; 
import styled, { keyframes } from 'styled-components';

import React, { useRef, useState, useEffect} from 'react';
import { useSpecialMessage } from '../context/SpecialMessageContext';
import DrawingCanvas from '../context/DrawingCanvas';

const StyledButton = styled.button`
  background-color: grey;
  color: white;
  padding: 3px 4px;
  border-radius: 1px;
  border: none;
  cursor: pointer;
`;
function isLocalStorageAvailable() {
  const testKey = 'test';
  const storage = window.localStorage;

  try {
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return true;
  } catch (error) {
      return false;
  }
}

const UserInputComponent = () => {
    const [color, setColor] = useState('white');
    const [inputValue, setInputValue] = useState<string>('');
    const [displayText, setDisplayText] = useState<string[]>([]);
    const secretPassword = "<333";
    const { showSpecialMessage, setShowSpecialMessage } = useSpecialMessage(); 
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = window.sessionStorage.getItem('displayText');
            if (saved) {
                setDisplayText(JSON.parse(saved));
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.sessionStorage.setItem('displayText', JSON.stringify(displayText));
        }
    }, [displayText]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };



    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (inputValue === secretPassword) {
                console.log("Password is correct!");
                setDisplayText(prevText => [...prevText, "Access Granted!"]);
                setShowSpecialMessage(true);
            }else {
                setColor(color);
                setDisplayText(prevText => [inputValue]);
            }
            setInputValue('');
        }
    };

    return (
        <div>
            <a>Choose title color:</a>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <a></a>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder={showSpecialMessage ? "Hello Love" : "Enter Title of Work Here"}
            />
            <div style={{ textAlign: 'center' } }>
            {displayText.map((text, index) => (
              <h1 key={index} style={{ color: color }}>{text}</h1>
            ))}
          </div>
      </div>
    );
};

const CoolStuff: React.FC = () => {
  const { showSpecialMessage } = useSpecialMessage();
  const [userResponse, setUserResponse] = useState('');
  const handlePrompt = () => {
    const response = window.prompt('Please enter your answer:');
    if (response !== null) {
        setUserResponse(response);
    }
  };
  return (
    <div className="container">

    <header>
      <h1>Welcome to Vincent&apos;s Trying Stuff Area</h1>
      <a>Passionate computer engineer exploring exciting projects.</a>
      {showSpecialMessage && (<p className="tagline">I hoped you enjoyed my website, but like really you specifically I hoped you liked it!</p>)}
    </header>

    <React.StrictMode>
    <UserInputComponent/>
    </React.StrictMode>
    <DrawingCanvas/>

    <footer>
      <div>
        <StyledButton onClick={handlePrompt}>Give Feedback</StyledButton>
        {userResponse && <p>You responded: {userResponse}</p>}
        <Link href="/">
          <StyledButton>Go to Home Page</StyledButton>
        </Link>
      </div>
    
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
