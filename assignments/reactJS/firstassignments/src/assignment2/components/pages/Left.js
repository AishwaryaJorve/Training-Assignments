import React from 'react';
import Employee from './Employee';
import Student from './Student';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Dashbord from './Dashbord';
import {Link} from 'react-router-dom';
function Left(){
    
    return(
    
        <>
          <div class="left">
               <li>    <Link to="/">Dashbord</Link>   </li>
               <li>    <Link to="/Student">Student</Link>   </li>
               <li>    <Link to="/Employee">Employee</Link> </li>
          </div>
       </> 
        );
};

export default Left;