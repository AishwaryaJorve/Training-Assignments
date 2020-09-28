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

	async deleteLeaveData(empId)
     {
        let query=`delete from leave_Information where emp_id=
        ${empId}`;
        let deletedLeave=await this.databaseService.executeQuery(query);
        return deletedLeave; 
     }
}
module.exports=LeaveService;