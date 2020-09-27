import React from 'react';
import Left from '../common/Left';
import EmpData from '../../data/Employee.json';

function Employee()
{
    return(
      <div>

        <div className="column">
            <Left/>
        </div>

          <div className="Dashbord">
            <h1 className="Title">Employee Data</h1>
                  <table className="table">
                        <thead>
                          <th>Id</th>
                            <th>Employee Name</th> 
                            <th>salary</th>
                        </thead>
        
                        <tbody>
                         {EmpData.map((data)=>{
                               return(
                               <tr>
                                <td>{data.emp_id}</td>
                                  <td>{data.emp_name}</td>
                                  <td>{data.emp_sal}</td>
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
 