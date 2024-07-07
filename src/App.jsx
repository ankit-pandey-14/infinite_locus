import React from 'react';
import './styles/common.css';
import { BrowserRouter } from 'react-router-dom';
import { HistoryProvider } from './services/historyContext';

const AppRouter = React.lazy(() => import("./AppRouter"));

const App = () => {
    return (
        <BrowserRouter>
            <HistoryProvider>
                <AppRouter />
            </HistoryProvider>
        </BrowserRouter>
    );
};

export default App;