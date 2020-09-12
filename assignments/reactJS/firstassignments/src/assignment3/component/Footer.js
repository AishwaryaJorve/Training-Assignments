import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component
{
    constructor(props){
        super(props);
        this.state={
            email:''
        }
        
        
    }
    
    
    
    handleClick=(event)=>{
        event.preventDefault();
        console.log(this.state.email);
    }
    
    handleChange=(event)=>{
        
        this.setState({
            [event.target.name]:event.target.value
            
        });
    }
    
    render(){
    return(
    
        <div className="Footer">
        
                 <div className="footer_link">
                    <Link className='footer-lnk' to="/">Home</Link><br/><br/>
                    <Link className='footer-lnk' to="/About">AboutUs</Link>
                 </div>
        
                 <h4 className="head">Copyright @ All rights reserved design by Liviano</h4>
        
                 <div className='footer-form'>
                      <form id="fr" onSubmit={this.handleClick}>
                         <input type='email' className='footer_input' name='email' value={this.state.email} onChange={this.handleChange}/>
                         <button>send</button>
                      </form>
                </div>
        
        
        </div>
    
    );
}
}
export default Footer;




















