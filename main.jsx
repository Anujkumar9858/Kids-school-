import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
// import './index.css';
import { BrowserRouter } from "react-router-dom"; 

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Appcollage from './Appcollage';

const root = createRoot(document.getElementById("root")); 
root.render(
  <StrictMode>
    <BrowserRouter> 
    <Appcollage/>
    </BrowserRouter>
  </StrictMode>
);
