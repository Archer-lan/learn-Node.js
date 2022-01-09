const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request',(req,res)=>{
    const url = req.url;
    const method = req.method;
    // const fpath = path.join(__dirname,url);
    let fpath='';
    if(url === '/'){
        fpath = path.join(__dirname,'./clock/index.html');
    }else{
        fpath = path.join(__dirname,'/clock',url);
    }
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{

        if(err) return res.end('404 not found');

        res.end();
    })
})
server.listen(80,()=>{
    console.log()
})

//module.exports
//例
const m = require('./node-02')
console.log(m)
//打印的m中存储了require文件中exports 的方法。

//向exports对象上挂载方法和属性
let age = 20;
module.exports.age = age;
module.exports.username = 'zs';
module.exports.sayHello = function () {
    
}
//或
module.exports = {

}