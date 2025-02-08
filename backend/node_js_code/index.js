// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
    console.log(req.url)
    if(req.url === `/`){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from Node Js Server World!\n');
    }else if (req. url === `/about`){
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello from About Page pf oop dsa db!\n');
    } else if (req.url === `/services`) {
        res.writeHead(200, { 'Content-Type': 'html' });
        res.end("<h1>services</h1>");
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
