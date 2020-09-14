import React from 'react';
import Left from './Left';


function Student()
{
    return(
      <div>
        
        <div className="column">
            <Left/>
        </div>
        
        <div className="Dashbord">
            <h1 className="stud">Students Data</h1>
        
                    <table className="table">
                          <tr>
                            <th>Firstname</th>
                            <th>Lastname</th> 
                            <th>Marks</th>
                          </tr>
                          <tr>
                            <td>Shubhangi</td>
                            <td>Dongre</td>
                            <td>90h</td>
                          </tr>
                          <tr>
                            <td>Mahesh</td>
                            <td>Bansode</td>
                            <td>94</td>
                          </tr>
                          <tr>
                            <td>Aishwarya</td>
                            <td>Jorve</td>
                            <td>80</td>
                          </tr>
                </table>
        
        
        </div>
        
        
      </div>      
    );
    
}

export default Student;
 