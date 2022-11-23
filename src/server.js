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
var XLSX = require('xlsx');
var Client_1 = require("./entities/Client");
var Brack_1 = require("./entities/Brack");
var Health_1 = require("./entities/Health");
var Temperature_ontrol_1 = require("./entities/Temperature\u0421ontrol");
var Accounts_1 = require("./entities/Accounts");
var Professions_1 = require("./entities/Professions");
var Dishes_1 = require("./entities/Dishes");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ubuntu",
    password: "ubuntu",
    database: "pi",
    entities: [Client_1.User, Brack_1.Bracklog, Health_1.Health, Temperature_ontrol_1.TemperatureСontrolLog, Accounts_1.Account, Dishes_1.Dishes, Professions_1.Professions],
    synchronize: true
});
AppDataSource.initialize()
    .then(function () {
    console.log('DB connect');
})["catch"](function (error) { return console.log(error); });
var listdishesgarnire;
listdishesgarnire = ["Капуста жареная 150г", "Капуста жареная кг", "Капуста жареная с яйцом 150г", "Капуста пекинская жареная с помидороми 150г", "Картофель Айдахо дольками 100г", "Картофель Айдахо из с/мороженого кг", "каша перловая с луком и грибами 150г", "Картофель жареный с луком 200г", "Каша перловая со свеклой и овощами 150г", "Лапша рисовая 200г", "Лапша рисовая с куриным филе 350г", "Лапша рисовая с орехами и овощами 370г", "Лапша Соба 200г", "Лапша Соба с курицей 360г", "Макароны с жареными шампиньонами 150г", "Паста карбонара с соусом бешамель(ветчиной,грибами,сыром)250г", "Пюре картофельное по-домашнему 200г", "Рис(жареный) с карри 150г", "Рис золотистый 150г", "Рис со стручковой фасолью и овощами 150г", "Цветное овощное рагу 150г", "Чечевица с овощами и грибами 200г", "Фасоль с овощами 150г", "Булгур с овощами 150г", "Булгур с овощами", "Кабачки жареные 200г", "Кабачки тушеные с помидорами 200г", "Капуста тушеная 200г", "Капуста тушеная с помидорами 200г", "Капуста цветная с растительным маслом 90/10г", "Картофель отварной кг", "Картофель отварной с маслом,зеленью 140/10/1г", "Картофель фри/для салатов/кг", "Картофель фри 100г", "Каша гречневая постная 150г", "Каша гречневая рассыпчатая 150г", "Каша гречневая с грибами и луком 150г", "Каша перловая кг", "Каша перлова я овощами 130/20г", "Овощная смесь с растительным маслом 90/10г", "Пюре гороховое 200г", "Пюре картофельное 200г", "Рагу овощное 200г", "Рагу овощное с баклажанами 150г", "Рагу овощное с кабачками 200г", "Рис отварной150г", "Рис отварной с овощами(лук,морковь)150г", "Рис пикантный150г", "Рис постный150г", "Рис с грибами и луком150г", "Рис с овощами(морковь,лук,кукуруза,з/горошек)150г", "Фасоль стручковая с маслом растительным90/10г", "Рожки отварные200г", "Спагети отварные150г", "Фасоль с овощами150г"];
var listdishespech;
listdishespech = ["безе со сливками и ананасом75г", "беляш особый(свинина,капуста)80г", "булочка осетинская (картофель,сыр,м-з,чеснок)100г", "булочка осетинская (сыр,м-з,чеснок)100г", "булочка сластена(творожная масса)50г", "булочка французская с шоколадом70г", "ватрушка с ветченой,сыром75г"];
var listdishessalats;
listdishessalats = ["винегрет с горошком120", "винегрет с сельдью80/30г", "рыба под маринадом/горбуша/50/50г", "пикша50/50г", "салат аида с грецкими орехами100г", "салат алеша 100г"];
var listdishesnapit;
listdishesnapit = ["компот из апельсинов 200г", "компот из клубники200г", "компот из малины200г", "компот из облепихи200г", "компот из свежих яблок с корицей и мятой200г", "компот из черники200г", "компот из черной смородины200г"];
var listprof;
listprof = ["Заведующий производством", "Повар", "Пекарь кондитер", "Кондитер", "Мойщик кухонной посуды", "Мойщик сервизной посуды", "Помощник повара", "Мойщик производственных помещений", "Кассир", "Продавец продовольственных товаров", "Кладовщик", "Заведующий складом", "Калькулятор", "Коренщик"];
// var workbook = XLSX.readFile('./src/tech.xlsx');
// var worksheet = workbook.Sheets["Sheet1"]
// var desired_cell;
// for (var i=1; i <= 7; i++) {
// desired_cell = worksheet['A'+i];
// console.log(desired_cell.v);
// }
var ngrok = require('ngrok');
ngrok.authtoken('2Gj2e1okLI8jtft3cqzgiDaztCJ_795j3CUFjQGGhvgcLSu4r');
ngrok.connect(8080).then(function (data) { return console.log(data); });
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
            var resjson, TemperatureСontrol, created, UsersArray, userRepository;
            return __generator(this, function (_a) {
                body_1 = Buffer.concat(body_1).toString();
                res.on('error', function (err) {
                    console.error(err);
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                if (isJsonString(body_1) == true) {
                    resjson = (JSON.parse(body_1));
                    TemperatureСontrol = new Temperature_ontrol_1.TemperatureСontrolLog();
                    TemperatureСontrol.user = resjson.user;
                    TemperatureСontrol.temperature = resjson.temperature;
                    TemperatureСontrol.vlazhn = resjson.vlazhn;
                    TemperatureСontrol.sign = resjson.sign;
                    TemperatureСontrol.warehouse = resjson.warehouse;
                    created = new Date;
                    TemperatureСontrol.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    TemperatureСontrol.time = "".concat(created.getHours(), ":").concat(created.getMinutes(), ":").concat(created.getSeconds());
                    console.log('DB connect');
                    userRepository = AppDataSource.getRepository(Client_1.User);
                    userRepository.find().then(function (data) { return UsersArray; });
                    if (typeof (TemperatureСontrol.user) == "number") {
                        if (typeof (TemperatureСontrol.temperature) == "number") {
                            if (typeof (TemperatureСontrol.vlazhn) == "number") {
                                if (typeof (TemperatureСontrol.warehouse == "string")) {
                                    if (typeof (TemperatureСontrol.sign) == 'boolean') {
                                        AppDataSource.manager.save(TemperatureСontrol);
                                        res.write("User has been added" + JSON.stringify(TemperatureСontrol) + JSON.stringify({ "created": TemperatureСontrol.date.toString() }));
                                        res.end();
                                    }
                                    else {
                                        res.write("ERROR! sign isnt type bool");
                                        res.end();
                                    }
                                }
                                else {
                                    res.write("ERROR! warehouse isnt type string");
                                    res.end();
                                }
                            }
                            else {
                                res.write("ERROR! vlazhn isnt type string");
                                res.end();
                            }
                        }
                        else {
                            res.write("ERROR! temperature isnt type string");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! User isnt type number");
                        res.end();
                    }
                }
                else {
                    res.write("ERROR! Type of JSON input");
                    res.end();
                }
                return [2 /*return*/];
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
                health.User = resjson.user;
                health.proffesion = resjson.proffesion;
                health.okz = resjson.okz;
                health.anginamark = resjson.anginamark;
                health.diagnos = resjson.diagnos;
                health.passtowork = resjson.passtowork;
                var created = new Date;
                health.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                health.signSupervisor = resjson.signsupervisor;
                health.signWorker = resjson.signworker;
                console.log('DB connect');
                if ((typeof (health.signSupervisor) == 'boolean' && typeof (health.signWorker) == 'boolean' && health.User != null && (health.okz != null && (typeof (health.okz) == 'boolean')) && (health.anginamark != null && (typeof (health.anginamark) == 'boolean'))) && health.diagnos != null && (health.passtowork != null && typeof (health.passtowork) == 'boolean') && health.proffesion != null) {
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
                brack.serveTime = resjson.serveTime;
                brack.dish = resjson.dish;
                brack.rating = resjson.rating;
                brack.timespend = resjson.timespend;
                brack.userdone = resjson.userdone;
                brack.note = resjson.note;
                var created = new Date;
                brack.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                console.log('DB connect');
                if (brack.user != null && typeof (brack.serveTime) == 'number' && brack.dish != null && (brack.rating == 1 || brack.rating == 2 || brack.rating == 3) && typeof (brack.timespend) == 'number' && brack.userdone != null && brack.note != null) {
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
                user.deleted = false;
                user.banned = false;
                user.passwordToChange = false;
                user.created = new Date;
                console.log('DB connect');
                if ((user.name != null && user.fam != null && user.otch != null && user.role != null && typeof (user.deleted) == "boolean" && typeof (user.banned) == "boolean")) {
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
    else if (url.toString() === "/accountpost" && method === 'POST') {
        var body_5 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_5.push(chunk);
        }).on('end', function () {
            body_5 = Buffer.concat(body_5).toString();
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
            if (isJsonString(body_5) == true) {
                var resjson = (JSON.parse(body_5));
                var account = new Accounts_1.Account();
                account.login = resjson.login;
                account.password = resjson.password;
                account.user = resjson.user;
                account.created = new Date;
                console.log('DB connect');
                if ((account.login != null && account.password != null && account.user != null)) {
                    AppDataSource.manager.save(account);
                    res.write("User has been added" + JSON.stringify(account));
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
    else if (url.toString() === "/userupdate" && method === 'POST') {
        var body_6 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_6.push(chunk);
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
            var resjson, userRepository, userToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body_6 = Buffer.concat(body_6).toString();
                        res.on('error', function (err) {
                            console.error(err);
                        });
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        if (!(isJsonString(body_6) == true)) return [3 /*break*/, 2];
                        resjson = (JSON.parse(body_6));
                        userRepository = AppDataSource.getRepository(Client_1.User);
                        return [4 /*yield*/, userRepository.findOneBy({
                                id: resjson.user
                            })];
                    case 1:
                        userToUpdate = _a.sent();
                        userToUpdate.deleted = resjson.deleted;
                        userToUpdate.banned = resjson.banned;
                        userToUpdate.passwordToChange = resjson.passwordToChange;
                        console.log('DB connect');
                        if ((typeof (resjson.banned) == 'boolean' && typeof (resjson.deleted) == 'boolean' && typeof (resjson.passwordToChange) == 'boolean')) {
                            userRepository.manager.save(userToUpdate);
                            res.write("User has been updated" + JSON.stringify(userToUpdate));
                            res.end();
                        }
                        else {
                            res.write("ERROR! data error JSON");
                            res.end();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    else if (url.toString() === "/passwordupdate" && method === 'POST') {
        var body_7 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_7.push(chunk);
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
            var resjson, accRepository, accRepositoyrToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body_7 = Buffer.concat(body_7).toString();
                        res.on('error', function (err) {
                            console.error(err);
                        });
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        if (!(isJsonString(body_7) == true)) return [3 /*break*/, 2];
                        resjson = (JSON.parse(body_7));
                        accRepository = AppDataSource.getRepository(Accounts_1.Account);
                        return [4 /*yield*/, accRepository.findOneBy({
                                id: resjson.account
                            })];
                    case 1:
                        accRepositoyrToUpdate = _a.sent();
                        accRepositoyrToUpdate.password = resjson.password;
                        console.log('DB connect');
                        if ((resjson.password != null)) {
                            accRepository.manager.save(accRepositoyrToUpdate);
                            res.write("User has been updated" + JSON.stringify(accRepositoyrToUpdate));
                            res.end();
                        }
                        else {
                            res.write("ERROR! data error JSON");
                            res.end();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    else if (url.toString() === "/activeupdate" && method === 'POST') {
        var body_8 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_8.push(chunk);
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
            var resjson, dishRepository, dishRepositoyrToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body_8 = Buffer.concat(body_8).toString();
                        res.on('error', function (err) {
                            console.error(err);
                        });
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        if (!(isJsonString(body_8) == true)) return [3 /*break*/, 2];
                        resjson = (JSON.parse(body_8));
                        dishRepository = AppDataSource.getRepository(Dishes_1.Dishes);
                        return [4 /*yield*/, dishRepository.findOneBy({
                                id: resjson.dish
                            })];
                    case 1:
                        dishRepositoyrToUpdate = _a.sent();
                        dishRepositoyrToUpdate.active = resjson.active;
                        console.log('DB connect');
                        if ((typeof (resjson.active) == 'boolean') && (dishRepositoyrToUpdate != null)) {
                            dishRepository.manager.save(dishRepositoyrToUpdate);
                            res.write("Dish has been updated" + JSON.stringify(dishRepositoyrToUpdate));
                            res.end();
                        }
                        else {
                            res.write("ERROR! data error JSON");
                            res.end();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    else if (url.toString() === "/roleupdate" && method === 'POST') {
        var body_9 = [];
        req.on('error', function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            body_9.push(chunk);
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
            var resjson, userRepository, userRepositoyrToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body_9 = Buffer.concat(body_9).toString();
                        res.on('error', function (err) {
                            console.error(err);
                        });
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'application/json');
                        if (!(isJsonString(body_9) == true)) return [3 /*break*/, 2];
                        resjson = (JSON.parse(body_9));
                        userRepository = AppDataSource.getRepository(Client_1.User);
                        return [4 /*yield*/, userRepository.findOneBy({
                                id: resjson.user
                            })];
                    case 1:
                        userRepositoyrToUpdate = _a.sent();
                        userRepositoyrToUpdate.role = resjson.role;
                        console.log('DB connect');
                        if ((typeof (userRepositoyrToUpdate.role) == 'string') && (userRepositoyrToUpdate != null)) {
                            userRepository.manager.save(userRepositoyrToUpdate);
                            res.write("Users role has been updated" + JSON.stringify(userRepositoyrToUpdate));
                            res.end();
                        }
                        else {
                            res.write("ERROR! data error JSON");
                            res.end();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    else if (url.toString() === "/usersget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var userRepository = AppDataSource.getRepository(Client_1.User);
        userRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
    else if (url.toString() === "/professionsget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var userRepository = AppDataSource.getRepository(Professions_1.Professions);
        userRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
    }
    else if (url.toString() === "/dishesget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var userRepository = AppDataSource.getRepository(Dishes_1.Dishes);
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
    else if (url.toString() === "/accountget") {
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var AccountRep = AppDataSource.getRepository(Accounts_1.Account);
        AccountRep.find().then(function (data) { return writeend(JSON.stringify(data)); });
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
    else if (url.toString() === '/dishes') {
        for (var i = 0; i <= listdishesgarnire.length - 1; i++) {
            var dishes = new Dishes_1.Dishes();
            dishes.dish = listdishesgarnire[i];
            dishes.active = true;
            dishes.category = "Гарниры";
            AppDataSource.manager.save(dishes);
        }
        for (var i = 0; i <= listdishesnapit.length - 1; i++) {
            var dishes = new Dishes_1.Dishes();
            dishes.dish = listdishesnapit[i];
            dishes.active = true;
            dishes.category = "Напитки";
            AppDataSource.manager.save(dishes);
        }
        for (var i = 0; i <= listdishespech.length - 1; i++) {
            var dishes = new Dishes_1.Dishes();
            dishes.dish = listdishespech[i];
            dishes.active = true;
            dishes.category = "Выпечка";
            AppDataSource.manager.save(dishes);
        }
        for (var i = 0; i <= listdishessalats.length - 1; i++) {
            var dishes = new Dishes_1.Dishes();
            dishes.dish = listdishessalats[i];
            dishes.active = true;
            dishes.category = "Салаты";
            AppDataSource.manager.save(dishes);
        }
        res.write("Done dishes");
        res.end();
    }
    else if (url.toString() === '/professions') {
        for (var i = 0; i <= listprof.length - 1; i++) {
            var prof = new Professions_1.Professions();
            prof.profession = listprof[i];
            AppDataSource.manager.save(prof);
        }
        res.write("Done profs");
        res.end();
    }
    else {
        res.write("ERROR! No API");
        res.end();
    }
}).listen(8080, function () {
    console.log("Server started at 8080 port");
});
