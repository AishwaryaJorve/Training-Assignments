import React from 'react';
import {useFormik} from 'formik';




    const initialValues={
          fname:'',
          lname:'',
          email:'',
          contact:'', 
          state:'',
          city:'',
          pincode:'',  
        }
    
    
    
    
    const onSubmit =values=>{
        console.log('Form data',values)
    }
    
    
    
    
    const validate=values=>{
            
            let errors={}
            
            if(!values.fname)
                {
                    errors.fname='please fill the required fields'
                }
            
            if(!values.lname)
                {
                    errors.lname='please fill the required fields'
                }
            
            if(!values.email)
                {
                    errors.email='please fill the required fields'
                }
            else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
                {
                    errors.email='Invalid email format'
                }
            
            if(!values.contact)
                {
                    errors.contact='please fill the required fields'
                }
            
            if(!values.state)
                {
                    errors.state='please fill the required fields'
                }
            
            if(!values.city)
                {
                    errors.city='please fill the required fields'
                }
            
            if(!values.pincode)
                {
                    errors.pincode='please fill the required fields'
                }
            
            return errors
        }
        
    
    
function Home() {
    
    const formik=useFormik({
        
        initialValues, 
        
        onSubmit,
      
        validate 
        
    })
    
  console.log('Form errors',formik.errors);
    
return (
     
    
    <div className="Home">
            
    
                <h3 className="stud_reg">Student Registration</h3>
            
          <form onSubmit={formik.handleSubmit}>
              
            
              
             
             <div className="form_control">
    
              <lable htmlFor='fname'>First Name :</lable>
              <input type='text' id='fname' name='fname' onChange={formik.handleChange} value={formik.values.fname}/>
              
               {formik.errors.fname ? <div className='error'>{formik.errors.fname}</div> :null}
    
             </div>
    
    
              <div className="form_control">
          
              <lable htmlFor='lname'>Last Name :</lable>
              <input type='text' id='lname' name='lname' onChange={formik.handleChange} value={formik.values.lname}/>
    
              {formik.errors.lname ? <div className='error'>{formik.errors.lname}</div> :null}
            
             </div>
    
    
              <div className="form_control">
           
              <lable htmlFor='email'>Email :</lable>
              <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
    
              {formik.errors.email ? <div className='error'>{formik.errors.email}</div> :null}           
    
              </div>
            
            
              <div className="form_control">
    
              <lable htmlFor='contact'>Contact No :</lable>
              <input type='number' id='contact' name='contact' onChange={formik.handleChange} value={formik.values.contact}/>
    
               {formik.errors.contact ? <div className='error'>{formik.errors.contact}</div> :null}
                     
    
               </div>
                
    
              <div className="form_control">
             
              <lable htmlFor='state'>State :</lable>
              <input type='text' id='state' name='state' onChange={formik.handleChange} value={formik.values.state}/>
    
              {formik.errors.state ? <div className='error'>{formik.errors.state}</div> :null}
               
    
               </div>
              
             
              <div className="form_control">
    
              <lable htmlFor='city'>City :</lable>
              <input type='text' id='city' name='city' onChange={formik.handleChange} value={formik.values.city}/>
    
              {formik.errors.city ? <div className='error'>{formik.errors.city}</div> :null}
               
    
              </div>
    
    
              <div className="form_control">
            
              <lable htmlFor='pincode'>Pincode :</lable>
              <input type='text' id='pincode' name='pincode' onChange={formik.handleChange} value={formik.values.pincode}/>
    
              
              {formik.errors.pincode ? <div className='error'>{formik.errors.pincode}</div> :null}
                
              </div>
              
              
              <button className='button' type='submit'>Save</button>
            
            </form>
        
         
    </div>
         );
}

export default Home;