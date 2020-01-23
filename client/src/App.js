import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

import './App.css';

function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
            <Navigation />
    </BrowserRouter>
  );
}

export default App;
