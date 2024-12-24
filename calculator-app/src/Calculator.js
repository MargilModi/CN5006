import React, { useState } from 'react';
import './Calculator.css';
import likeImage from './like.png';

const Calculator = () => {
    const [input, setInput] = useState(''); // To store the input expression
    const [result, setResult] = useState(''); // To store the calculated result
    const [showImage, setShowImage] = useState(false); // To toggle image display

    // Handles button click for numbers and operators
    const handleClick = (value) => {
        setInput(input + value);
    };

    // Calculates the result of the entered expression
    const calculateResult = () => {
        try {
            setResult(eval(input)); // Use eval to compute the result
        } catch (error) {
            setResult('Error'); // Handle invalid input
        }
    };

    // Clears the input and result
    const clearInput = () => {
        setInput('');
        setResult('');
    };

    // Calculates the square of the entered number
    const calculateSquare = () => {
        const number = parseFloat(input); // Parse the input as a number
        if (!isNaN(number)) {
            setResult(number * number); // Calculate square
        } else {
            setResult('Error'); // Handle invalid input
        }
    };

    // Toggles the image display
    const showImageHandler = () => {
        setShowImage(true);
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} readOnly placeholder="Enter a value" />
                <div className="result">{result}</div>
                {showImage && <img src={likeImage} alt="Your Image" />}
            </div>
            <div className="buttons">
                {/* Number and operator buttons */}
                {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '/'].map((value) => (
                    <button key={value} onClick={() => handleClick(value)}>
                        {value}
                    </button>
                ))}
                <button onClick={clearInput}>C</button> 
                <button onClick={calculateResult}>=</button> 

              
                <button onClick={calculateSquare}>Square</button> 
                <button onClick={showImageHandler}>Show Me</button> 
            </div>
        </div>
    );
};

export default Calculator;
