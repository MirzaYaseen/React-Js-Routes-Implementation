//Creating HTTP Server:
var http=require("http");
var mongoose=require("mongoose")
var Schema =mongoose.Schema;
var dbUrl='mongodb://localhost:27017/cui';
var EmpSchema=Schema({
    name:{
        type:String, required:true
    }
});
var Employee=mongoose.model('Employee',EmpSchema);
mongoose.connect(dbUrl,function(err){
    if(err){
        return console.log('There was a problem connecting with DB')
    }
    console.log('DB connected Successfully')
})
var fs=require("fs");
//const { ELOOP } = require("constants");
http.createServer(function(req,res){
if(req.url==='/' && req.method === 'GET'){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<center><h1>Hello Welcome</h1>');
    res.write('if u want to display file: <a href="/showfile">Click Here</a><br>');
    res.write('if u want to create a log entry: <a href="/logfile">Click Here</a><br>');
    res.write('show specific employee with name: <a href="/show">Click Here</a><br>');
    res.write('Delete Specific Employee info: <a href="/delete">Click Here</a></center>');
    res.write('Update Specific Employee info: <a href="/update">Click Here </a></center>');
    res.write('Add an Employee info: <a href="/insert">Click Here </a></center>');
} else if(req.url==='/showfile' && req.method ==='GET'){
    var rstream=fs.createReadStream('abc.txt');
    res.writeHead(200,{'Content-Type': 'text/html'});
    rstream.pipe(res);
} else if(req.url==='/logfile' && req.method==='GET'){
    var append="Route is called for logfile";
    fs.appendFile('log.txt',append,function(err){
        if(err) throw err;
        else{
            console.log('log entry saved!');
            res.writeHead(200,{ 'Content-Type': 'text/html'});
            res.end('Log Entry has benn done');
        }

    })
} else if (req.url==='/show' && req.method==='GET'){
    Employee.find().exec(function(error,emps){
        if(error) throw error;
        res.end(emps.toString())
    });
} else if (req.url==='/insert' && req.method==='GET'){
    var emp= new Employee({
        name:'Shahmeer'
    })
    emp.save(function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.end('record added successfully');
        }
    })
   
} else if(req.url==='/delete' && req.method==='GET'){
    Employee.deleteOne({name:'Shahmeer'},function(err,emps){
        if(err) return handleError(err);
        res.end('record deleted succesfully');
    });
}
else if(req.url==='/update' && req.method==='GET'){
    Employee.findOneAndUpdate({name:'Shahmeer'},{name:'Shahmeeraaaa gee'},function(err,emps){
        if(err) return handleError(err);
        res.end('record updated succesfully');
    });
}
else{
    res.writeHead(404,{'Content-Type':'text/html'})
}


}).listen(3000);