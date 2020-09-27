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

	

}
module.exports=EmployeeService;