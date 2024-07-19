const http = require('node:http')
//const path = require('node:path')
//const promises = require('node:fs/promises')
const os = require('node:os')

const fs = require('node:fs')



const desiredPort = process.env.PORT ?? 1234

const processRequest = async (req, res) => {
    if (req.url === '/') {
        try {
            const data = fs.readFileSync('../texto.txt', 'utf-8');
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end(data);
        } catch (err) {
            console.error(err);
            res.statusCode = 500;
            res.end(`Error no se pudo leer esta huevada. ${err}`);
        }
    } else {
        console.log('fatal error');
    }
};

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
    console.log(`Server listening on port http://localhost:${desiredPort}`)
})







