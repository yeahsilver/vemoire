var express = require('express');
var app = express(); // app 객체 생성
console.log('process.env.PORT', process.env.PORT);
app.get('/', function(req,res){
    res.send("Hello, World");
})
app.listen(process.env.PORT, function(){
    console.log('Connected!!!');
})