// const { writeFileSync } = require('fs')

// for(let i = 0; i < 10000; i++) {
//     writeFileSync('./content/bigdata.txt', `Hello bro ${i}\n`, { flag: 'a' })
// }

// const { createReadStream } = require('fs')

// const stream = createReadStream('./content/bigdata.txt', { highWaterMark: 90000,encoding: 'utf8' })


// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/bigdata.txt', { hightWaterMark: 90000 })



// stream.on('data', (result) => {
//     console.log(result)
// })

// stream.on('error', (err) => console.log(err))

const http = require('http')
const fs = require('fs')

http.createServer((req,res) => {
    // const result = fs.readFileSync('./content/bigdata.txt','utf8')
    // res.end(result)

    const fileStream = fs.createReadStream('./content/bigdata.txt','utf8');
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })

})
.listen(8000)