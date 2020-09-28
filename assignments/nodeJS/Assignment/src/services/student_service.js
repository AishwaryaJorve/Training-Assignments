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

    	let addedStudentResponse=await this.databaseService.executeQuery(query);
    	return addedStudentResponse;
    }
     
     async deleteStudent(studentId)
     {
        let query=`delete from student_Information where Student_id=
        ${studentId}`;
        let deletedStudentResponse=await this.databaseService.executeQuery(query);
        return deletedStudentResponse; 
     }
}
module.exports=StudentService;