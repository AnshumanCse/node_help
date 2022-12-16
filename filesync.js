const {readFile, writeFile} = require('fs')
console.log("start")
readFile('./content/second.txt','utf8', (err,res) => {
    if(err) {
        console.log(err)
        return
    }
    // console.log(res)
    const second = res;
    writeFile('./content/thirdfile.txt',`This is from file sync again; ${second}`, (err,res) => {
        if(err){
            console.log(err)
            return
        }
        console.log(res)
    })
    console.log("done with this task")
})

console.log("end")
console.log("next project")