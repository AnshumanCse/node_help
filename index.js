const { readFile, writeFile } = require("fs").promises;
// const util = require('util')

// // promise
// const readFilePromise  = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async() => {
    try {
        const first = await readFile('./content/second.txt','utf8');
        const second = await readFile('./content/write-sync.txt','utf8');
        await writeFile('./content/result.txt',`This is awesome deepak bro : ${first} ${second}`, {flag:'a'}) // --> a == append
        console.log(first,second)
    } catch (error) {
        console.log(error)
        
    }
}
start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };



// getText("./content/thirdfile.txt")
//   .then((result) => console.log(result))
//   .catch((err) => {
//     console.log(err);
//   });

// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         res.end("Home Page")
//     }
//     if(req.url === '/about') {
//         res.end("About Page")
//     }else{
//         res.end("Oops!")

//     }

// })

// server.listen(5000, () => {
//     console.log("server is running at 5000")
// })

// started operating system process

// console.log("first")
// setTimeout(() => {
//     console.log("second")
// },1000)
// console.log("Third")
// completed and exited operating system process
