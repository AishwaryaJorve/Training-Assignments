import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Left from './Left';


function Employee()
{
    return(
      <div>
        
        <div className="column">
            <Left/>
        </div>
        
        <div className="Dashbord">
            <h1 className="stud">Employee Data</h1>
        
                    <table className="table">
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th> 
                            <th>salary</th>
                          </tr>
                          <tr>
                            <td>Shubhangi</td>
                            <td>Dongre</td>
                            <td>30k</td>
                          </tr>
                          <tr>
                            <td>Mahesh</td>
                            <td>Bansode</td>
                            <td>60k</td>
                          </tr>
                          <tr>
                            <td>Aishwarya</td>
                            <td>Jorve</td>
                            <td>28k</td>
                          </tr>
                </table>
        
        
        </div>
        
        
      </div>      
    );
    
}

export default Employee;
 