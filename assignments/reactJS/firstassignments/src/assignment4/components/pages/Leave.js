import React from 'react';
import Left from '../common/Left';
import LeaveData from '../../data/Leave.json';

function Employee()
{
    return(
      <div>
        
        <div className="column">
            <Left/>
        </div>
        
        <div className="Dashbord">
            <h1 className="stud">Leave Data</h1>
                <table className="table">
                       <thead>
                            <th>Id</th>
                            <th>Employee Name</th> 
                            <th>Leave Date</th>
                       </thead>
        
                        <tbody>
                        {LeaveData.map((data)=>{
                            return(
                               <tr>
                                   
                                  <td>{data.emp_id}</td>
                                  <td>{data.emp_name}</td>
                                  <td>{data.leave_date}</td>
                                   
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
export default Employee;
 