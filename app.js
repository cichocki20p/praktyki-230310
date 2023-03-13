const express = require('express')
const app = express()
const port = 3000 // 8080 not working on hosting

app.get('/', (req, res) => {
    res.send ('<h1>Hi hello</h1>')
    res.send ('<h3>14.03.2023 00:01</h3>Test w domu')
})

app.listen(port, () => {
    console.log("express workin??")
})

// ((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('Just tryin to write some stuff\n')
//     res.write('Lorem ipsum lorum ipsem\n')
//     res.write('LESGO server s workin')
//     res.end()
// })

// server.listen(port, () => {
//     console.log(`Yol. Request executed - server started.`)
// })
