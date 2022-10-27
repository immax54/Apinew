"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const http_1 = __importDefault(require("http"));
const typeorm_1 = require("typeorm");
const Client_1 = require("./entities/Client");
const AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "postgres",
    entities: [Client_1.User]
});
http_1.default.createServer(function (req, res) {
    const url = req.url;
    const method = req.method;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 86400000000);
    const json = { "id": 1, "name": "Bob", };
    const outjson = JSON.stringify(json);
    const user = new Client_1.User();
    if (url.toString() === '/json') {
        res.write((outjson));
        res.end();
    }
    else if (url.toString() === `/user` && method === 'POST') {
        const { method, url } = req;
        let body = [];
        req.on('error', (err) => {
            console.error(err);
        }).on('data', (chunk) => {
            body.push(chunk);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            res.on('error', (err) => {
                console.error(err);
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            const responseBody = { body };
            const keys = Object.keys(responseBody);
            console.log(keys);
            console.log(responseBody.body);
            res.write(JSON.stringify(responseBody));
            res.end();
        });
    }
    else if (url.toString() === '/id') {
        res.write("".concat(json.id.toString()));
        res.end();
    }
    else {
        res.write("ERROR! No API here!");
        res.end();
    }
}).listen(3002, function () {
    console.log("Server started at 3002 port");
});
//# sourceMappingURL=server.js.map