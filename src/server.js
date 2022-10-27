"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("reflect-metadata");
var http = require("http");
var typeorm_1 = require("typeorm");
var Client_1 = require("./entities/Client");
var Brack_1 = require("./entities/Brack");
var Health_1 = require("./entities/Health");
var Temperature_ontrol_1 = require("./entities/Temperature\u0421ontrol");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123",
    database: "postgres",
    entities: [Client_1.User, Brack_1.Bracklog, Health_1.Health, Temperature_ontrol_1.TemperatureСontrolLog],
    synchronize: true
});
AppDataSource.initialize()
    .then(function () {
    console.log('DB connect');
})["catch"](function (error) { return console.log(error); });
http.createServer(function (req, res) {
    var _this = this;
    var url = req.url;
    var method = req.method;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 86400000000);
    if (url.toString() === "/tempcontrolpost" && method === 'POST') {
        var body_1 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_1.push(chunk);
        }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
            function isJsonString(str) {
                try {
                    JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            function findvalid(rep) {
                return __awaiter(this, void 0, void 0, function () {
                    var find;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                find = AppDataSource.getRepository(rep);
                                return [4 /*yield*/, find.findOne({
                                        where: {
                                            user: (0, typeorm_1.Not)((0, typeorm_1.IsNull)())
                                        }
                                    })];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    });
                });
            }
            var resjson, TemperatureСontrol, find, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body_1 = Buffer.concat(body_1).toString();
                        res.on('error', function (err) {
                            console.error(err);
                        });
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        if (!(isJsonString(body_1) == true)) return [3 /*break*/, 3];
                        resjson = (JSON.parse(body_1));
                        TemperatureСontrol = new Temperature_ontrol_1.TemperatureСontrolLog();
                        TemperatureСontrol.user = resjson.user;
                        TemperatureСontrol.temperature = resjson.temperature;
                        TemperatureСontrol.vlazhn = resjson.vlazhn;
                        TemperatureСontrol.warehouse = resjson.warehouse;
                        TemperatureСontrol.created = new Date;
                        console.log('DB connect');
                        find = AppDataSource.getRepository(Temperature_ontrol_1.TemperatureСontrolLog);
                        _a = TemperatureСontrol.user != null;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, findvalid(Temperature_ontrol_1.TemperatureСontrolLog)];
                    case 1:
                        _a = ((_b.sent()) != null);
                        _b.label = 2;
                    case 2:
                        if ((((_a && TemperatureСontrol.temperature != null && TemperatureСontrol.vlazhn != null && TemperatureСontrol.warehouse != null)))) {
                            AppDataSource.manager.save(TemperatureСontrol);
                            res.write("User has been added" + JSON.stringify(TemperatureСontrol));
                            res.end();
                        }
                        else {
                            res.write("ERROR! data error in JSON");
                            res.end();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        res.write("ERROR! Type of JSON input");
                        res.end();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }
    else if (url.toString() === "/healthpost" && method === 'POST') {
        var body_2 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_2.push(chunk);
        }).on('end', function () {
            body_2 = Buffer.concat(body_2).toString();
            res.on('error', function (err) {
                console.error(err);
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            function isJsonString(str) {
                try {
                    JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            if (isJsonString(body_2) == true) {
                var resjson = (JSON.parse(body_2));
                var health = new Health_1.Health();
                health.user = resjson.user;
                health.proffesion = resjson.proffesion;
                health.okz = resjson.okz;
                health.anginamark = resjson.anginamark;
                health.diagnos = resjson.diagnos;
                health.passtowork = resjson.passtowork;
                health.created = new Date;
                console.log('DB connect');
                if ((health.user != null && (health.okz != null && (typeof (health.okz) == 'boolean')) && (health.anginamark != null && (typeof (health.anginamark) == 'boolean'))) && health.diagnos != null && (health.passtowork != null && typeof (health.passtowork) == 'boolean') && health.proffesion != null) {
                    AppDataSource.manager.save(health);
                    res.write("User has been added" + JSON.stringify(health));
                    res.end();
                }
                else {
                    res.write("ERROR! data error JSON");
                    res.end();
                }
            }
            else {
                res.write("ERROR! Input isnt JSON");
                res.end();
            }
        });
    }
    else if (url.toString() === "/brackpost" && method === 'POST') {
        var body_3 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_3.push(chunk);
        }).on('end', function () {
            body_3 = Buffer.concat(body_3).toString();
            res.on('error', function (err) {
                console.error(err);
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            function isJsonString(str) {
                try {
                    JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            if (isJsonString(body_3) == true) {
                var resjson = (JSON.parse(body_3));
                var brack = new Brack_1.Bracklog();
                brack.user = resjson.user;
                brack.acception = resjson.acception;
                brack.dish = resjson.dish;
                brack.dishmark = resjson.dishmark;
                brack.timespend = resjson.timespend;
                brack.userdone = resjson.userdone;
                brack.created = new Date;
                console.log('DB connect');
                if (brack.user != null && brack.acception != null && brack.dish != null && brack.dishmark != null && brack.timespend != null && brack.userdone != null) {
                    AppDataSource.manager.save(brack);
                    res.write("User has been added" + JSON.stringify(brack));
                    res.end();
                }
                else {
                    res.write("ERROR! data error JSON");
                    res.end();
                }
            }
            else {
                res.write("ERROR! Input isnt JSON");
                res.end();
            }
        });
    }
    else if (url.toString() === "/userpost" && method === 'POST') {
        var body_4 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_4.push(chunk);
        }).on('end', function () {
            body_4 = Buffer.concat(body_4).toString();
            res.on('error', function (err) {
                console.error(err);
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            function isJsonString(str) {
                try {
                    JSON.parse(str);
                }
                catch (e) {
                    return false;
                }
                return true;
            }
            if (isJsonString(body_4) == true) {
                var resjson = (JSON.parse(body_4));
                var user = new Client_1.User();
                user.name = resjson.name;
                user.fam = resjson.fam;
                user.otch = resjson.otch;
                user.role = resjson.role;
                user.created = new Date;
                console.log('DB connect');
                if ((user.name != null && user.fam != null && user.otch != null && user.role != null)) {
                    AppDataSource.manager.save(user);
                    res.write("User has been added" + JSON.stringify(user));
                    res.end();
                }
                else {
                    res.write("ERROR! data error JSON");
                    res.end();
                }
            }
            else {
                res.write("ERROR! Input isnt JSON");
                res.end();
            }
        });
    }
    else if (url.toString() === "/usersget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var userRepository = AppDataSource.getRepository(Client_1.User);
        userRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
    else if (url.toString() === "/brackget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var BrackRepository = AppDataSource.getRepository(Brack_1.Bracklog);
        BrackRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
    else if (url.toString() === "/tempcontrolget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var TempRepository = AppDataSource.getRepository(Temperature_ontrol_1.TemperatureСontrolLog);
        TempRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
    else if (url.toString() === "/healthget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var HealthRepository = AppDataSource.getRepository(Health_1.Health);
        HealthRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
    else {
        res.write("ERROR! No API");
        res.end();
    }
}).listen(3002, function () {
    console.log("Server started at 3002 port");
});
