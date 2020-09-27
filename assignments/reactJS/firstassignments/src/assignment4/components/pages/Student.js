import React from 'react';
import Left from '../common/Left';
import StudData from '../../data/Student.json';

function Student()
{
    return(
      <div>
        
        <div className="column">
            <Left/>
        </div>
        
        <div className="Dashbord">
            <h1 className="Title">Students Data</h1>
        
                    <table className="table">
                       <thead>
                          
                            <th>Id</th>
                            <th>Student Name</th> 
                            <th>Marks</th>
                       </thead>
        
                       <tbody>
                        {StudData.map((data)=>{
                               return(
                               
                                   <tr>
                                   
                                      <td>{data.stud_id}</td>
                                      <td>{data.stud_name}</td>
                                      <td>{data.stud_marks}</td>
                                   
                                   </tr>
                               );
                             }
                             )}
                     </tbody>
                </table>
        
        
        </div>
        
        
      </div>      
    );
    
}

export default Student;
 