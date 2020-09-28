const DatabaseService=require("./database_service");

class EmployeeService{
	constructor(){
		this.databaseService=new DatabaseService(); 
	}

	async getAllInformationOfEmployee(){
		let query="select * from employee_Information";
		let output=await this.databaseService.executeQuery(query);
		return output;
	}
 
    async deleteEmployee(employeeId)
     {
        let query=`delete from employee_Information where emp_id=
        ${employeeId}`;
        let deletedEmployeeResponse=await this.databaseService.executeQuery(query);
        return deletedEmployeeResponse; 
     }
	

}
module.exports=EmployeeService;