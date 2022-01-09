//打印当前目录
// console.log(__dirname);
// const path = require('path');

//路径拼接
// const pathStr=path.join('/a','/b/c','../')
// const pathStr2=path.join(__dirname,'./1.txt')

//获取路径中的文件名
// path.basename(path[,ext])
//例
// const fpath= '/a/b/c/index/html'
// var fullname = path.basename(fpath);
// var nameWithoutExt = path.basename(fpath,'.html');

//获取路径中的扩展名
// const fext = path.extname(fpath)

//对于完整html文件中 css部分、js部分进行分离
//建立正则表达式正则表达式，/s匹配空格字符,/S匹配非空格字符
// const regStyle = /<style>[/s/S]*<\/style>/
// const regScript=/<script>[/s/S]*<\/script>/

//使用exec函数进行匹配
// const r1=regStyle.exec(htmlStr)//此处htmlStr应为读入html文件

//http模块
const http= require('http')
//创建web服务器
const server = http.createServer()
// server.on('request',function (req,res) {
//     console.log('someone visit ouer web')
// })
//启动服务器
// server.listen(80,function () {
//     console.log('server runing at http://127.0.0.1:80')
// })

//req请求对象,包含与客户端相关的数据和属性
// server.on('request',req=>{
//     //req.url 是客户端请求的URL地址
//     const url = req.url
//     //req.method 是客户端请求的method类型
//     const method = req.method
//     const str='your request url is '+url+',and request method is '+method;
//     console.log(str)
// })
// server.listen(80,function () {
//     console.log('server runing at http://127.0.0.1:80')
// })

//res请求对象
// server.on('request',(req,res)=>{
//     const url = req.url
//     const method = req.method
//     const str='your request url is '+url+',and request method is '+method;
//     console.log(str)
//     res.end(str)
// })
// server.listen(80,function () {
//     console.log('server runing at http://127.0.0.1:80')
// })
//
// //解决中文乱码问题
// res.setHeader('Content-Type','text/html;charset=utf-8')

//根据不同的url内容 返回不同页面内容
server.on('request',(req,res)=>{
    const url = req.url
    let content = '<h1>404 Not Found!</h1>';
    if(url==='/'||url==='index.html'){
        content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'
    }

    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end(content)
})
server.listen(80,function () {
    console.log('server runing at http://127.0.0.1:80')
})