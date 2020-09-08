import React from 'react';
//import './Registration.css';

class Registration extends React.Component {
  
     constructor(props) {
                           super(props);
                           this.state = {fname: ''};
                           this.state = {lname: ''};
                           this.state = {contact: ''};
                           this.state = {email: ''};
         
                           this.handleSubmit = this.handleSubmit.bind(this);
                        }
    
     handleSubmit(event){
         var prop=this.state;
         
         if(!prop.fname || !prop.lname || !prop.contact || !prop.email)
             {
                 alert(`Please Enter all Values`);
                 return;
             }
    alert(`Information :\n ${prop.fname} \n ${prop.lname} \n ${prop.contact} \n ${prop.email}  `);
         event.preventDefault();
       
 }
    
    
    
doChange =(event)=>{
    let element=event.target.id;
      this.setState({[element]:event.target.value})
}

doReset =(event)=>{
    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("contact").value="";
    document.getElementById("email").value="";
    
};


  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
          <h2>Registration Form</h2>
        <pre>
          First Name:  <input type="text" value={this.state.fname} id="fname" onChange={this.doChange}/><br/><br/><br/>
           Last Name:   <input type="text" value={this.state.lname} id="lname" onChange={this.doChange}/><br/><br/><br/>
             Contact:   <input type="number" value={this.state.contact} id="contact" onChange={this.doChange}/><br/><br/><br/>
             Email:   <input type="text" value={this.state.email} 
    id="email" onChange={this.doChange}/><br/><br/><br/>
              
         <input type="submit" value="submit"/>     <button type="button" onClick={this.doReset}>Reset</button>
        </pre>
      </form>
    );
  }
}

export default Registration;