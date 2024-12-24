var express=require("express")
var fs=require("fs") 
var app=express()



const PORT=8000;
var bodyparser = require("body-parser");
const student = require("./student.json");

var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (request,response)
{
response.send("welcome to express")
}
)

app.get('/about', function (req, res){
    res.send ("this is basic example of express ")
}) 

app.get('/user/:userid/book/:bookid' , function(req,res){
   res.send(req.params)
})


app.get('/GetStudents' , function (req,res){
    studentdata={}
    fs.readFile(__dirname + "/" + "student.json", 'utf8', function (err, data) { console.log( data );
         res.json({ 'status':true, 'Status_Code':200,
         'requested at': req.localtime, 'requrl':req.url,
         'request Method':req.method, 'studentdata':JSON.parse(data)});
        });
}
)

app.get('/GetStudentid/:id',(req,res)=>{
    studentdata={}
    fs.readFile(__dirname + "/" + "Student.json", 'utf8'
   , function (err, data) {
   
    var students= JSON.parse(data)
    var student=students["Student"+req.params.id]
    console.log("student",student)
    if (student)
   
    res.json(student)
    else
    res.json({ 'status':true, 'Status_Code':200,
    'requested at': req.localtime, 'requrl':req.url,
    'request Method':req.method, 'studentdata':JSON.parse(data)});
    });
    })

    app.get('/studentinfo' , function(req,res){
        res.sendFile('studentinfo.html' , {root : __dirname});
    })

    app.post('/submit-data' , (req,res) => {
        console.log(req.body);
        var name = req.body.firstName;
        console.log(name)
        var Age = req.body.myAge + 'Gender' + req.body.gender + ' '
        Qual = 'Qualification' + req.body.Qual 
        console .log (req.body.Qual)
        res.send ({
            status:true, message : ' from data ' , data : { name : name , Age : Age , Qualification : Qual, }
         
        });
    });

app.listen(PORT , function() {
 console.log("server is running on port 8000")
} 
)

