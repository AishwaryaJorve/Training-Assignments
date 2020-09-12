import React from 'react';
import {Link} from 'react-router-dom';
//import Home from './Home';
//import About from './About';
//import Contact from './Contact';
function Header()
{
    return(
    
        <div className="Header"> 
            <div className="Link">
                <Link to="/">Home    </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/About">AboutUs    </Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Contact">ContactUs  </Link> &nbsp;&nbsp;&nbsp;&nbsp;
             </div>
        </div>
    
    );
}

export default Header;