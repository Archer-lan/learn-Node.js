const fs=require('fs')//导入fs模块
//fs.readFile(path[,option],callback)//读取制定文件中的内容
//例,此读取为异步读取，同步为readFileSync
fs.readFile('123.txt','utf8',function (err, dataStr) {
    console.log(err)
    console.log(dataStr)
})
//当读取成功时err值为null

//此读取为异步写入，同步为writeFileSync
fs.writeFile('123.txt','hello node',function (err) {
    console.log(err)
})