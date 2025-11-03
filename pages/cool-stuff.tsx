// pages/cool-stuff.tsx

import Head from 'next/head';
import Link from 'next/link'; 
import styled, { keyframes } from 'styled-components';
import styles from '../styles/Home.module.css';

import React, { useRef, useState, useEffect} from 'react';
import { useSpecialMessage } from '../context/SpecialMessageContext';
import DrawingCanvas from '../context/DrawingCanvas';

const today = new Date();
const isValentinesDay = today.getMonth() === 1 && today.getDate() === 14; // In JavaScript and TypeScript, months are 0-indexed, so February is 1


const StyledButton = styled.button`
  background-color: grey;
  color: {showSpecialMessage ? red : white};
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

interface TemporaryFontSizeChangerProps {
  message: string; // Specify the type of the `message` prop
}

interface TemporaryFontSizeChangerProps {
  message: string;
}

const TemporaryFontSizeChanger: React.FC<TemporaryFontSizeChangerProps> = ({ message }) => {
  const [fontSize, setFontSize] = useState(16);
  const isGrowing = useRef(true); // Use useRef to persist the value

  useEffect(() => {
    const interval = setInterval(() => {
      setFontSize(prevFontSize => {
        if (prevFontSize >= 50) isGrowing.current = false;
        if (prevFontSize <= 16) isGrowing.current = true;
        return isGrowing.current ? prevFontSize + 1 : prevFontSize - 1;
      });
    }, 30);

    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []); // Empty dependency array

  return (
    <div>
      <h1 style={{ fontSize: `${fontSize}px` }}>{message}</h1>
    </div>
  );
};


interface UserInputComponentProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const UserInputComponent: React.FC<UserInputComponentProps> = ({ setTitle }) => {
    const [title, setTitleLocal] = useState('');
    const [displayText, setDisplayText] = useState<string[]>([]);
    const secretPassword = "<333";
    const { showSpecialMessage, setShowSpecialMessage } = useSpecialMessage(); 
    

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const saved = window.sessionStorage.getItem('displayText');
            const savedC = window.sessionStorage.getItem('color');
            if (saved) {
                setDisplayText(JSON.parse(saved));
            }
        }
    }, []);

    const askForTitle = () => {
      const userInput = prompt(showSpecialMessage ? "Hello Love" : "Enter Title of Work Here", "");
      if (userInput !== null) {
        if(userInput === secretPassword){
          setTitle("My Darling"); 
          setShowSpecialMessage(true);
        }else{
          setTitle(userInput); // Update the state with the user's input
          console.log(userInput);
        }
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value); // Update the title as the user types
    };

    return (
        <div>
          <button onClick={askForTitle} 
            placeholder={showSpecialMessage ? "Hello Love" : "Enter Title of Work Here"}
          >Enter Title Here</button>
          <div style={{ textAlign: 'center', fontSize: 20, color:'black'} }>
            <h1>{title}</h1>
            {/* {showSpecialMessage && <TemporaryFontSizeChanger message={title}/> || <h1>{title}</h1>} */}
          </div>
        </div>
    );
};

const CoolStuff: React.FC = () => {
  const { showSpecialMessage } = useSpecialMessage();
  const [userResponse, setUserResponse] = useState('');
  const [title, setTitle] = useState('');

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
      <a>This is a safe place where I can try cool new things.</a>
      {showSpecialMessage && (<p className="tagline">I hoped you enjoyed my website, but like really you specifically I hoped you liked it!</p>)}
    </header>
    <div style={{ textAlign: 'center', fontSize: 20, color: showSpecialMessage ? 'black':'white'} }>
      {showSpecialMessage && <TemporaryFontSizeChanger message={title}/> || <h1>{title}</h1>}
    </div>
    <React.StrictMode>
    <UserInputComponent setTitle={setTitle} />
    </React.StrictMode>
    <DrawingCanvas special={showSpecialMessage || isValentinesDay} title = {title}/>

    <footer>
      <div>
        <StyledButton onClick={handlePrompt}>Give Feedback</StyledButton>
        {userResponse && <p>You responded: {userResponse}</p>}
        <Link href="/">
          <StyledButton>Go to Home Page</StyledButton>
        </Link>
        
        { showSpecialMessage && (<Link href="/VDay"> <StyledButton>Go Special Valentine&apos;s Day Button</StyledButton> </Link>)}
      </div>
    
    <p>Contact: ninjaharkins@gmail.com</p>
  </footer>

  <style jsx>{`

    .container {
      max-width: 1050px;
      margin: 0 auto;
      padding: 40px;
      font-family: ${showSpecialMessage ? 'Comic Sans MS' : 'Arial'};
      background: ${showSpecialMessage 
        ? 'url(/images/Hearts.png)' 
        : '#28292a'};   //'linear-gradient(to right, red, #282c34)'};
      background-size: cover; // Cover the entire container
      background-position: center; // Center the image in the container
      background-repeat: no-repeat; // Do not repeat the image
      border-radius: 80px;
    }
    h1 {
      fontSize: 100
    }
    header {
      text-align: center;
      margin-bottom: 20px;
      padding: 20px 0;
      background-color: #20232a; // Slightly darker header background
      border-radius: 80px 80px 80px 80px; // Rounded top edges
    }
    p{
      color: ${showSpecialMessage 
        ? 'red' 
        : '#777'};
      text-decoration: none; 
    }

    a{
      color: ${showSpecialMessage 
        ? 'red' 
        : '#777'};
      text-decoration: none;
    }
  `}</style>
</div>
);
};
export default CoolStuff;
