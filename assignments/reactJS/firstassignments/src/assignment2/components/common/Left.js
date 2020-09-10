import React from 'react';
import Employee from './Employee';
import Student from './Student';
import Footer from './Footer';
import Header from './Header';
import Dashbord from './Dashbord';
import {Link} from 'react-router-dom';
function Left(){
    
    return(
    
        <>
          <div class="left">
             <Link to="/">Dashbord</Link>
            <Link to="/Student">Student</Link>
            <Link to="/Employee">Employee</Link>
           
          </div>
       </> 
        );
};

export default Left;