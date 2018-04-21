const http = require('http');
const fs = require('fs');
const path = require('path');
const mimeTypes = require("./mime-types");

http.createServer((req, res) => {
    const filePath = `.${req.url}`;
    const extname = `${path.extname(filePath)}`.toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500);
            res.end(`${error}`);
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });

}).listen(8000);

console.log('Server running at http://localhost:8000/styleguide/html/index.html');