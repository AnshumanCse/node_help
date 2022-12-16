// built in modules

// os 
// path
// fs
// http

const os = require("os")
const user = os.userInfo()  // info about user
console.log(user)

console.log(`The system uptime is ${os.uptime}`)

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)