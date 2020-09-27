

//     App.js file of assignment4




import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from '../src/assignment4/components/common/Footer';

import Header from '../src/assignment4/components/common/Header';
import Menu from '../src/assignment4/route/Menu';
import '../src/assignment4/assets/style.css';
import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    
      <div>
      <BrowserRouter>
           <Header/>
           <Menu/>
           <Footer/>  
      </BrowserRouter>
      </div>
  );
};

export default App;
