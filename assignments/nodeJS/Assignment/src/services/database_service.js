const mysql=require("mysql");
class DatabaseService{
	constructor(){
		this.connection=mysql.createConnection({
			host:"localhost",
			user:"root",
			password:"pass",
			database:"liviano"
		});
		this.connection.connect((error)=>{
			if(error){
				throw error;
			}
		});
	}
	async executeQuery(query){
		let current=this;
		const promises=new Promise(function(resolve,reject){
			current.connection.query(query,function(error,rows)
			{
				if(rows==undefined){
					reject(new Error("Data is not showing"))
				}
				else{
					resolve(rows)
				}
			});
		});
		return promises;
	}
}
module.exports=DatabaseService;