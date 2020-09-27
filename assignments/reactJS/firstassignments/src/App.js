

//     App.js file of assignment2




import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from '../src/assignment2/components/common/Footer';
import Menu from '../src/assignment2/route/Menu';
import Header from '../src/assignment2/components/common/Header';



import '../src/assignment2/assets/style.css';
import {BrowserRouter} from "react-router-dom";
import {Route,Switch} from "react-router-dom";


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
