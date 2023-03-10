const http = require('http') // to be able to run any server using Node.js
const port = 8080 // changed from 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Just tryin to write some stuff\n')
    res.write('Lorem ipsum lorum ipsem\n')
    res.write('LESGO server s workin')
    res.end()
})

server.listen(port, () => {
    console.log(`Yol. Request executed - server started.`)
})
