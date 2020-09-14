import React from 'react';
import {Link} from 'react-router-dom';

function Left(){
    
    return(
    
        <>
          <div class="left">
               <li>    <Link to="/">Dashbord</Link>   </li>
               <li>    <Link to="/student">Student</Link>   </li>
               <li>    <Link to="/employee">Employee</Link> </li>
               <li>    <Link to="/leave">Leave</Link> </li>
          </div>
       </> 
        );
};

export default Left;