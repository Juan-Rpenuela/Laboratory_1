/*const MyUrl = new URL('http://www.KiroInc.org.co/courses?name=javascript&duration=6months&price=free');

console.log(MyUrl.hostname);//www.KiroInc.org.co
console.log(MyUrl.pathname);//courses
console.log(MyUrl.searchParams);
console.log(MyUrl.searchParams.get('price'));//name=javascript&duration=6months&price=free

*/

//api de node.js//

const http = require('http');
const pizzery = require('./pizzeria');

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case 'GET':
            return applicationManagementGET(req, res);
        case 'POST':
            return applicationManagementPOST(req, res);
        default:
            console.log('This request is not avaliable');

    }
});

function applicationManagementGET(req, res) {
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200;
        res.end('Welcome to my first Nodejs server')
    }
    else if (path === '/inventary') {
        res.statusCode = 200;
        res.end(JSON.stringify(pizzery.pizzeria));
    }
    else if (path === '/inventary/pizzas') {
        res.statusCode = 200;
        res.end(JSON.stringify(pizzery.pizzeria.Pizzas));
    }
    else {
        res.statusCode = 404;
        res.end(`Error ${res.statusCode} not found`);
    }
};

function applicationManagementPOST(req, res) {
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200;
        res.end('Welcome to my first Nodejs server')
    }
    else if (path === '/inventary') {
        res.statusCode = 200;
        res.end(JSON.stringify(pizzery.pizzeria));
    }
    else if (path === '/inventary/pizzas') {
        let body = '';
        req.on('data', content => {
            body += content.toString();
        });

        req.on('end', () => {
            //convirtiendo de string a objeto
            body = JSON.parse(body);
            console.log(body.pizza);
            //only string
            console.log(body);
            res.end('Data has been received');
        });
        res.statusCode = 200;
        res.end(JSON.stringify(pizzery.pizzeria.Pizzas));
    }
    else {
        res.statusCode = 404;
        res.end(`Error ${res.statusCode} not found`);
    }
};

const port = 3000

server.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});