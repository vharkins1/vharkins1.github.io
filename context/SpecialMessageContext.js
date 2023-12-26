// SpecialMessageContext.js by CHATGPT

import React, { createContext, useState, useContext } from 'react';

const SpecialMessageContext = createContext();

export const useSpecialMessage = () => useContext(SpecialMessageContext);

export const SpecialMessageProvider = ({ children }) => {
    const [showSpecialMessage, setShowSpecialMessage] = useState(false);

    return (
        <SpecialMessageContext.Provider value={{ showSpecialMessage, setShowSpecialMessage }}>
            {children}
        </SpecialMessageContext.Provider>
    );
};
