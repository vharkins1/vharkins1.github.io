import React, { useState } from 'react';


const WOW: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [gptResponse, setGptResponse] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting form"); // notifies when the request is sent
        console.log(process.env.REACT_APP_OPENAI_API_KEY);
        try {
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${'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'}`
                },
                body: JSON.stringify({
                    model: "text-davinci-003",
                    prompt: userInput,
                    max_tokens: 100
                }),
            });

            if (!response.ok) {
                throw new Error('Network response FAILED');
            }

            const data = await response.json();
            setGptResponse(data.choices[0].text);
        } catch (error) {
            console.error('Error fetching response from OpenAI:', error);
        }
    };

    return (
        <div className="container">
            <header>
                <h1>Interact with OpenAI GPT</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <textarea value={userInput} onChange={(e) => setUserInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <p>Response from GPT:</p>
                <p>{gptResponse}</p>
            </div>
        </div>
    );
};

export default WOW;