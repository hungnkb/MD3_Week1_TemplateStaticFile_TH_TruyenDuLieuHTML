const http = require('http');
const qs = require('qs');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('./views/index.html', 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        let userName = 'Admin';
        data = data.replace('{name}', userName)
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end()
    })
})
server.listen('8080', () => {
    console.log('Server is running in http://localhost.com')
})