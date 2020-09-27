const DatabaseService=require("./database_service");

class StudentService{
	constructor(){
		this.databaseService=new DatabaseService(); 
	}

	async getAllInformationOfStudent(){
		let query="select * from student_Information";
		let output=await this.databaseService.executeQuery(query);
		return output;
	}

    async addNewStudent(newStudnet){
    	let query=`insert into student_Information(Student_id,first_name,last_name,marks)
    	values('${newStudnet.Student_id}',
    	'${newStudnet.first_name}',
    	'${newStudnet.last_name}',
    	'${newStudnet.marks}')`;

    	let addedStudentResponse=this.databaseService.executeQuery(query);
    	return addedStudentResponse;
    }

}
module.exports=StudentService;