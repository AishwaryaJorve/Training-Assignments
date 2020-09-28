const express=require("express");
const bodyParser=require("body-parser");
const StudentService=require("../services/student_service");
const EmployeeService=require("../services/employee_service");
const LeaveService=require("../services/leave_service");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.send("hello");
});

let studentService=new StudentService();
let employeeService=new EmployeeService();
let leaveService=new LeaveService();

// all Student Information

app.get("/getAllInformationOfStudent",async (req,res)=>{
	let allStudentInformation=await studentService.getAllInformationOfStudent();
	res.send(allStudentInformation);
});

// Add new Student


// app.post("/addNewStudent",async (req,res)=>{
//        let newStudentInformation=req.body;
//        let addedStudentResponse=await studentService.addNewStudent
//        (newStudentInf1ormation);
//        res.send(addedStudentResponse);       

// });


// Delete Student Record

app.get("/deleteStudent/:id",async(req,res)=>{
	const id=req.params.id;
	let deletedStudentResponse=await studentService.deleteStudent(id);
	res.send(deletedStudentResponse);
})


// all Employee Information

app.get("/getAllInformationOfEmployee",async (req,res)=>{
	let allEmployeeInformation=await employeeService.getAllInformationOfEmployee();
	res.send(allEmployeeInformation);
});


// Delete Student Record

app.get("/deleteEmployee/:id",async(req,res)=>{
	const id=req.params.id;
	let deletedEmployeeResponse=await employeeService.deleteEmployee(id);
	res.send(deletedEmployeeResponse);
})


// all Leave Information

app.get("/getAllInformationOfLeave",async (req,res)=>{
	let allLeaveInformation=await leaveService.getAllInformationOfLeave();
	res.send(allLeaveInformation);
});

app.get("/deleteLeaveData/:id",async(req,res)=>{
	const id=req.params.id;
	let deletedLeave=await leaveService.deleteLeaveData(id);
	res.send(deletedLeave);
})


const port=8085;
app.listen(port,()=>console.log(`started on ${port}`))











