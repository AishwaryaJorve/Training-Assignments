import React from 'react';
import {Link} from 'react-router-dom';
function Footer()
{
    return(
    
        <div class="Footer">
        
        <h4 className="head">Copyright @ All rights reserved design by Liviano</h4>
              <div className="footer_link">
                <Link to="/">Home</Link><br/><br/>
                <Link to="/About">AboutUs</Link>
             
        
              
         </div>
        </div>
    
    );
}

export default Footer;




















