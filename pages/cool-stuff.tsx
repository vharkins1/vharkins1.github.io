// pages/cool-stuff.tsx

import Head from 'next/head';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import TopMenu from '../components/TopMenu';

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
    <div className="page-container drawing-page">
      <header className="page-header">
        <h1>Drawing Canvas</h1>
        <p className="tagline">A creative space to try new things</p>
        {showSpecialMessage && (<p className="special-message">I hoped you enjoyed my website!</p>)}
        <TopMenu />
      </header>

      <div className="page-content">
        <div className="canvas-controls">
          {showSpecialMessage && <TemporaryFontSizeChanger message={title}/> || (title && <h2 className="title-display">{title}</h2>)}
        </div>
        <UserInputComponent setTitle={setTitle} />
        <DrawingCanvas special={showSpecialMessage || isValentinesDay} title={title}/>
      </div>

      <footer className="page-footer">
        <div>
          <StyledButton onClick={handlePrompt}>Give Feedback</StyledButton>
          {userResponse && <p>You responded: {userResponse}</p>}
          {showSpecialMessage && (<Link href="/VDay"><StyledButton>Valentine&apos;s Day</StyledButton></Link>)}
        </div>
        <p>Contact: <a href="mailto:ninjaharkins@gmail.com">ninjaharkins@gmail.com</a></p>
      </footer>

      <style jsx>{`
        .canvas-controls {
          text-align: center;
          margin-bottom: 20px;
        }

        .title-display {
          color: #61dafb;
          font-size: 1.8em;
        }

        .special-message {
          color: #ff6b6b;
          font-style: italic;
        }
      `}</style>
    </div>
  );
};
export default CoolStuff;
