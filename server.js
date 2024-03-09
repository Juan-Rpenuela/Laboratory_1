//node js server//
/*const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Hello World");
});

const Port = 3000;

server.listen(Port, () => {
    console.log(`listening on port ${Port}...`);
}
);

const http = require('http');

const server = http.createServer((req, res) => {
    console.log("===>req (application)");
    console.log(req.method);
    res.end("Hello World");
});

const port = 3000;

server.listen(port, () => {
    console.log(`listening on port ${port}...`);
});
*/
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("===>res (response)");
    console.log(res.statusCode);
    res.statusCode = 418;
    console.log(res.statusCode);
    res.end("Error 418: I'm a teapot");
});

const port = 3000;

server.listen(port, () => {
    console.log(`listening on port ${port}...`);
});


