const { readFileSync,writeFileSync} = require('fs')

const second = readFileSync('./content/second.txt','utf8')
console.log(second)

// write file 

writeFileSync('./content/write-sync.txt',`here is the file: ${second}`,{flag: 'a'})