import React from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import {Route,Switch} from "react-router-dom";
function Links(){
    
    return(
        <div className="Links">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
            /*{    <Route component={Error}/>}*/
            </Switch>
        </div>
    );
};
        
export default Links;