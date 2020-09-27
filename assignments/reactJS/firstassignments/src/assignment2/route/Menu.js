import React from 'react';

import Student from '../components/pages/Student';
import Employee from '../components/pages/Employee';
import Dashbord from '../components/pages/Dashbord';
import Error from '../components/pages/Error';
import {Route,Switch} from "react-router-dom";

function Menu(){
    return (
        <div className="Menu">
            <Switch>
                <Route exact path="/" component={Dashbord}/>
                <Route exact path="/Student" component={Student}/>
                <Route exact path="/Employee" component={Employee}/>
                <Route component={Error}/>
            </Switch>
        </div>
    );
}
        
export default Menu;         