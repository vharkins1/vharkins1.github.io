// by ChatGPT
import React, { useRef, useEffect, useState } from 'react';



const DrawingCanvas = ({special,title}) => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [isErasing, setIsErasing] = useState(false);
    const [color, setColor] = useState(special ? 'red' : 'white');
    const brushSizeRef = useRef(5); // Ref for brush size
    const [brushSize, setBrushSize] = useState(5);


    useEffect(() => {
        // Check if the canvas reference is attached to the DOM
        if (!canvasRef.current) return;
    
        const canvas = canvasRef.current; // Get the current canvas element
    
        // Assuming the parent element of the canvas is its container
        const container = canvas.parentNode;
    
        // Get the computed styles of the container to understand its actual dimensions
        const containerStyle = window.getComputedStyle(container);
    
        // Extract the left and right padding values of the container
        const containerPaddingLeft = parseFloat(containerStyle.paddingLeft);
        const containerPaddingRight = parseFloat(containerStyle.paddingRight);
    
        // Calculate the adjusted width of the canvas by subtracting the container's paddings
        const adjustedWidth = container.clientWidth - containerPaddingLeft - containerPaddingRight;
    
        // Set the internal (drawing) size of the canvas, doubled for high DPI screens
        canvas.width = adjustedWidth * 2;
        canvas.height = window.innerHeight * 2;
    
        // Set the display size of the canvas, matching the adjusted width and viewport height
        canvas.style.width = `${adjustedWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
    
        // Get the 2D rendering context for the canvas
        const context = canvas.getContext('2d');
    
        // Scale the context to ensure the drawing is crisp on high DPI screens
        context.scale(2, 2);
    
        // Set properties for drawing lines
        context.lineJoin = 'round';
        context.lineCap = 'round'; // Rounded end caps for lines
        context.lineWidth = 5; // Width of the lines drawn
    
        // Set the current context to our contextRef for access in other drawing functions
        contextRef.current = context;
    
        // Call a function to draw the background (if you have one)
        
    
        drawBackground(context);
    }, []);


    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.strokeStyle = isErasing ? '#20232a' :color; // #20232a is the background color
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };
    
    const toggleErasing = () => {
        const newErasingState = !isErasing;
        setIsErasing(newErasingState);
    
        if (contextRef.current) {
            if(special){
                contextRef.current.globalCompositeOperation = newErasingState ? 'destination-out' : 'source-over';
            }
        }
    };
    


    const drawBackground = (context) => {
        
        if(special){
            const image = new Image();
            image.src = '/images/Hearts.png'; // Path to your image
            image.onload = () => {
                context.drawImage(image, 0, 0, context.canvas.width/2, context.canvas.height/2);
            };
        }else{
            // const drawBackground = (context) => {
            //     let gradient = context.createLinearGradient(0, 0, context.canvas.width, 0);
            //     gradient.addColorStop(0, 'blue');
            //     gradient.addColorStop(1, '#A82c34');
                
            //     context.fillStyle = gradient;
            //     context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            // };  
            context.fillStyle = '#20232a';          
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        }
        context.strokeRect(0, 0, context.canvas.width/2, context.canvas.height/2);

    };

    const saveDrawing = () => {
        const canvas = canvasRef.current;
        const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
        const link = document.createElement('a');
        if(title === ''){
            if(special){
                title = 'myLove';
            }else{
                title = 'myAmazingPieceOfArt';
            }
        }
        link.download = `${title}.png`;
        link.href = image;
        link.click();
    };


    const handleBrushSizeChange = (e) => {
        brushSizeRef.current = e.target.value; // Update brush size ref
        setBrushSize(e.target.value);
        if (contextRef.current) {
            contextRef.current.lineWidth = brushSizeRef.current; // Update line width
        }
    };


    return (
        <div>
        <input type="color" value= "#FFFFFF" onChange={(e) => setColor(e.target.value) } />
        <button onClick={() => { toggleErasing(); setIsErasing(!isErasing); }} >{isErasing ? 'Switch to Draw' : 'Switch to Erase'}</button>

            <label style={{fontSize: special ? '24px': '18px',fontWeight: special ? "bold" : "normal" , color: special ? "black" : "white"}}>Brush Size: </label>
            <input 
                type="range" 
                min="1" 
                max="50" 
                value={brushSize} 
                onChange={handleBrushSizeChange} 
            />
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
            ref={canvasRef}
        />
        <button onClick={saveDrawing}>Save Drawing</button> {/* Save button */}
        </div>
        
    );
};

export default DrawingCanvas;
