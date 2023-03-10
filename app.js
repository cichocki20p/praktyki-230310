const http = require('http')
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}/`)
})

// const prompt = require('prompt-sync')()

// const x = prompt('First number: ')
// const char = prompt('Character: ')
// const y = prompt('Second number: ')
// let result = 0

// switch (char) {
//     case "+":
//         result = Number(x) + Number(y)
//         break
//     case "-":
//         result = Number(x) - Number(y)
//         break
//     case "*":
//         result = Number(x) * Number(y)
//         break
//     case "/":
//         result = Number(x) / Number(y)
//         break
//     default:
//         result = "Entered wrong character."
// }

// console.log(result)

// npm init by stworzyć jsona
// front end: react / angular
// back end: express