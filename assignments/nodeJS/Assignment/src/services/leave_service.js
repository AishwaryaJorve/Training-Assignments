const DatabaseService=require("./database_service");

class LeaveService{
	constructor(){
		this.databaseService=new DatabaseService(); 
	}

	async getAllInformationOfLeave(){
		let query="select * from leave_Information";
		let output=await this.databaseService.executeQuery(query);
		return output;
	}

	

}
module.exports=LeaveService;