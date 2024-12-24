// defination of the function EmployeeInfo 

function EmployeeInfo(name,Salary) 
{ 
console.log("Wellcome " + name+ "Your monthly Sala ry is "+ Salary) 
} 

console.log ("This is my first progame") 

var EmpName="John" 
var EmpSalary= 50000

// calling of the function EmployeeInfo 

EmployeeInfo(EmpName,EmpSalary) 

// calling arrow function 

const Empskills= (skills)=>{
    console.log ("Expert in : " + skills)
}
Empskills("java")

//

const student = require ('./studentinfo')
const person = require ('./person')

// getname is function thats why ()

console.log ("Student Name:" +student.getName())  
console.log (student.Location())  
console.log (student.dob)  

// because dob is a variable so we dont use () 

    console.log(student.studentgrade()) 
    console.log("grade is "+student.studentgrade(60)) 
    person1= new person("Jim","USA","myemail@gmail.com") 
    console.log("using Person Module",person1.getpersnoalinfo()) 
    console.log("Programe ended")




os=require("os") 
const util=require('util') 
console.log("temporary directory"+ os.tmpdir() ) 
console.log("hostname: "+ os.hostname()) 
console.log("OS : " + os.platform() +"release:"+ os.release()) 
console.log("Uptime"+ (os.uptime())/3600 +" hours") 
console.log("userInfo" + util.inspect(os.userInfo())) 
console.log("Memory "+ os.totalmem()/1000000000 + "Giga byte") 
console.log(" free: "+os.freemem()/1000000000 + "Giga byte") 
console.log("CPU "+ util.inspect(os.cpus())) 
console.log("Network"+ util.inspect(os.networkInterfaces())) 
console.log("programe end") 