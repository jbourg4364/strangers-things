import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { App } from './components';

createRoot(document.querySelector('#root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);