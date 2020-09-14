

--------------------------------------------App.js of 3rd Assignment---------------------------------------------




import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from '../src/assignment3/component/Footer';

import Header from '../src/assignment3/component/Header';
import Links from '../src/assignment3/component/Links';

import {BrowserRouter} from "react-router-dom";
//import {Route,Switch} from "react-router-dom";

import '../src/assignment3/assest/forms.css';


function App() {
  return (
    
      <div>
        <BrowserRouter>
           <Header/>
           <Links/>
          <Footer/>  
        </BrowserRouter>
      </div>
  );
};

export default App;
