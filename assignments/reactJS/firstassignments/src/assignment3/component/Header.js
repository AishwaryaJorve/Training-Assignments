import React from 'react';
import {Link} from 'react-router-dom';
import img from '../../assignment3/img/logo.png';
function Header()
{
    return(
    
        <div className="Header"> 
         
         <div className='Header_img'>
            <img className='img' src={img}/>
          </div>
        
            <div className="Link">
                <Link className='lnk' to="/">Home    </Link>
                <Link className='lnk' to="/About">AboutUs    </Link> 
                <Link className='lnk' to="/Contact">ContactUs  </Link> 
             </div>
         
        </div>
    
    );
}

export default Header;