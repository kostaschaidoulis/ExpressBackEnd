const http = require('http')

const port = 3000

//Server Creation
const server = http.createServer((req, res) => {
   res.end(`Server was created at port: ${port}`)
   console.log(`Server was created at port: ${port}`)
}).listen(port)