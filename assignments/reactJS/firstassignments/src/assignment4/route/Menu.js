import React from 'react';

import Student from '../components/pages/Student';
import Employee from '../components/pages/Employee';
import Dashbord from '../components/pages/Dashbord';
import Leave from '../components/pages/Leave';

import {Route,Switch} from "react-router-dom";

function Menu(){
    
    return(
        <div className="Menu">
            <Switch>
                <Route exact path="/" component={Dashbord}/>
                <Route exact path="/student" component={Student}/>
                <Route exact path="/employee" component={Employee}/>
                <Route exact path="/leave" component={Leave}/>

                
            </Switch>
        </div>
    );
}
        
export default Menu;        