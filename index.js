const http = require('http')
const fs = require('fs')
const port = '3000'
const { error } = require('console')
fs.writeFileSync('./biodata.txt',"Hello my name is Harshit Akar.I am from Jaipur", (err)=>{});
const Info = fs.readFileSync("./biodata.txt",{encoding: "utf-8"});
console.log(Info)
http.createServer((req,res)=>{
    res.writeHead(200 , {'Content-Type': 'Text/Plain'})
    res.end(Info);
}).listen({port},()=>{
    console.log('Server listening on ${port}');
})
