/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const HistoryContext = React.createContext();

export const HistoryProvider = ({ children }) => {
    const [searchHistory, setSearchHistory] = useState([]);

    return (
        <HistoryContext.Provider
            value={{
                searchHistory,
                saveSearchHistory: setSearchHistory,
            }}
        >
            { children }
        </HistoryContext.Provider>
    );
}


export default HistoryContext;