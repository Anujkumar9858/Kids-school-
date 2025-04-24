import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter } from "react-router-dom"; 

import 'bootstrap/dist/css/bootstrap.min.css';

import Appcollage from './Appcollage';

const root = createRoot(document.getElementById("root")); 
root.render(
  <StrictMode>
    <BrowserRouter> 
    <Appcollage/>
    </BrowserRouter>
  </StrictMode>
);
