"use strict";
exports.__esModule = true;
require("reflect-metadata");
var http = require("http");
var typeorm_1 = require("typeorm");
var Client_1 = require("./entities/Client");
var Brack_1 = require("./entities/Brack");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "postgres",
    entities: [Client_1.User, Brack_1.Bracklog],
    synchronize: true
});
var userRepository = AppDataSource.getRepository(Client_1.User);
AppDataSource.initialize()
    .then(function () {
    console.log('DB connect');
})["catch"](function (error) { return console.log(error); });
http.createServer(function (req, res) {
    var url = req.url;
    var method = req.method;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 86400000000);
    var json = { "id": 1, "name": "Bob" };
    var outjson = JSON.stringify(json);
    if (url.toString() === '/json') {
        res.write((outjson));
        res.end();
    }
    else if (url.toString() === "/user" && method === 'POST') {
        var body_1 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_1.push(chunk);
        }).on('end', function () {
            body_1 = Buffer.concat(body_1).toString();
            res.on('error', function (err) {
                console.error(err);
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            var responseBody = { body: body_1 };
            var resjson = (JSON.parse(body_1));
            console.log(resjson.Name);
            var user = new Client_1.User();
            user.name = resjson.name;
            user.fam = resjson.fam;
            user.otch = resjson.otch;
            user.role = resjson.role;
            user.additional = resjson.additional;
            user.created = new Date;
            console.log('DB connect', user.id);
            AppDataSource.manager.save(user);
            res.write("User has been added" + JSON.stringify(user));
            res.end();
        });
    }
    else if (url.toString() === "/users") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var userRepository_1 = AppDataSource.getRepository(Client_1.User);
        userRepository_1.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
}).listen(3002, function () {
    console.log("Server started at 3002 port");
});
