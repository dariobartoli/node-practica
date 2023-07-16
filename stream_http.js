const http = require('http')
const {createReadStream} = require('fs')

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res)
    })

    //le va a ir pasando las porciones de datos al serivor

    fileStream.on('error', (error) => {console.log(error);})
})

server.listen(3000)
console.log(`server on port ${3000}`);
