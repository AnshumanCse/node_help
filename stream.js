const { writeFileSync } = require('fs')

for(let i = 0; i < 10000; i++) {
    writeFileSync('./content/bigdata.txt', `Hello bro ${i}\n`, { flag: 'a' })
}