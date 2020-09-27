import React from 'react';
import Left from '../common/Left';
import '../../assets/dashbord.css';

function Dashbord()
{
    return(
        
        <div>
        
        <div className="column">
            <Left/>
        </div>
        
        <div className="Dashbord">
          <h1 className="Dashbord_h1">Dashbord</h1>
        </div>
        </div>
    );
    
}

export default  Dashbord;