import React from 'react';

import Student from './Student';
import Footer from './Footer';
import Employee from './Employee';
import Dashbord from './Dashbord';
import {Route,Switch} from "react-router-dom";
function Menu(){
    
    return(
        <div className="Menu">
            <Switch>
                <Route exact path="/Dashbord" component={Dashbord}/>
                <Route exact path="/Student" component={Student}/>
                <Route exact path="/Employee" component={Employee}/>
                
            </Switch>
        </div>
    );
};
        
export default Menu;         