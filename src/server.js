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
// var XLSX = require('xlsx');
var Client_1 = require("./entities/Client");
var Brack_1 = require("./entities/Brack");
var Health_1 = require("./entities/Health");
var Temperature_ontrol_1 = require("./entities/Temperature\u0421ontrol");
var Accounts_1 = require("./entities/Accounts");
var Professions_1 = require("./entities/Professions");
var Categories_1 = require("./entities/Categories");
var Dishes_1 = require("./entities/Dishes");
var ConnectionCategoryDish_1 = require("./entities/ConnectionCategoryDish");
var Roles_1 = require("./entities/Roles");
var ConnectionUserRole_1 = require("./entities/ConnectionUserRole");
var Objects_1 = require("./entities/Objects");
var Places_1 = require("./entities/Places");
var Typedepartment_1 = require("./entities/Typedepartment");
var ConnectionFacilityPlacesDepartmentApplianece_1 = require("./entities/ConnectionFacilityPlacesDepartmentApplianece");
var ConnectionUserProfession_copy_1 = require("./entities/ConnectionUserProfession copy");
var Devices_1 = require("./entities/Devices");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "ubuntu",
    password: "ubuntu",
    database: "pi",
    entities: [Client_1.User, Brack_1.Bracklog, Devices_1.Appliances, Health_1.Health, Temperature_ontrol_1.TemperatureСontrolLog, Accounts_1.Account, Dishes_1.Dishes, Professions_1.Professions, Categories_1.Categories, ConnectionCategoryDish_1.ConnectionCategoryDish, Roles_1.Roles, ConnectionUserRole_1.ConnectionUserRole, Places_1.Places, Objects_1.Subject, Typedepartment_1.Typedepartment, ConnectionFacilityPlacesDepartmentApplianece_1.ConnectionFacilityPlacesDepartmentApplianece, ConnectionUserProfession_copy_1.ConnectionUserProfession],
    synchronize: true
});
AppDataSource.initialize()
    .then(function () {
    console.log('Connected to DB');
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
var listcategory = ["Напитки", "Горячее", "Гарниры", "Выпечка", "Салаты"];
var listroles = ["managerstolovaya", "director", "superadmin", "keeper", "cooker", "managerkeeper", "cleaner", "seller", "calculator"];
var listnames;
var listfam;
var listotch;
listnames = ["Семён", "Богдан", "Кира", "Максим", "Полина", "Кирилл"];
listfam = ["Кузнецов", "Максимов", "Морозова", "Симонов", "Макеева", "Алексеев"];
listotch = ["Глебович", "Львович", "Адамовна", "Семёнович", "Фёдоровна", "Леонидович"];
// var workbook = XLSX.readFile('./src/tech.xlsx');
// var worksheet = workbook.Sheets["Sheet1"]
// var desired_cell;
// for (var i=1; i <= 7; i++) {
// desired_cell = worksheet['A'+i];
// console.log(desired_cell.v);
// }
function isJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function GetData(body, res) {
    body = Buffer.concat(body).toString();
    res.on('error', function (err) {
        console.error(err);
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
}
var ngrok = require('ngrok');
ngrok.authtoken('2Gj2e1okLI8jtft3cqzgiDaztCJ_795j3CUFjQGGhvgcLSu4r');
ngrok.connect(8080).then(function (data) { return console.log(data); });
http.createServer(function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        function Get(Class) {
            function writeend(data) {
                res.write(data);
                res.end();
            }
            var userRepository = AppDataSource.getRepository(Class);
            userRepository.find().then(function (data) { return writeend(JSON.stringify(data)); });
        }
        function writeend(data) {
            res.write(data);
            res.end();
        }
        function writeend(data) {
            res.write(data);
            res.end();
        }
        function writeend(data) {
            res.write(data);
            res.end();
        }
        function writeend(data) {
            res.write(data);
            res.end();
        }
        function writeend(data) {
            res.write(data);
            res.end();
        }
        var url, method, body_1, body_2, body_3, body_4, body_5, body_6, body_7, body_8, body_9, body_10, body_11, body_12, body_13, body_14, body_15, body_16, body_17, body_18, body_19, body_20, body_21, body_22, userRepository, userRepository, userRepository, userRepository, userRepository, created, i_1, dishes, i_2, dishes, i_3, dishes, i_4, dishes, created, i, category, created, i, role, created, i, connect, i, connect, i, connect, i, connect, i_5, created, user, i_6, prof;
        var _this = this;
        return __generator(this, function (_a) {
            url = req.url;
            method = req.method;
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
            res.setHeader('Access-Control-Max-Age', 86400000000);
            if (url.toString() === "/tempcontrolpost" && method === 'POST') {
                body_1 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_1.push(chunk);
                }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var resjson, TemperatureСontrol, created;
                    return __generator(this, function (_a) {
                        GetData(body_1, res);
                        if (isJsonString(body_1) == true) {
                            resjson = (JSON.parse(body_1));
                            TemperatureСontrol = new Temperature_ontrol_1.TemperatureСontrolLog();
                            TemperatureСontrol.user = resjson.user;
                            TemperatureСontrol.temperature = resjson.temperature;
                            TemperatureСontrol.vlazhn = resjson.vlazhn;
                            TemperatureСontrol.sign = resjson.sign;
                            TemperatureСontrol.ConnectionFacilityPlacesDepartmentApplianece = resjson.applianceplace;
                            created = new Date;
                            TemperatureСontrol.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                            TemperatureСontrol.time = "".concat(created.getHours(), ":").concat(created.getMinutes(), ":").concat(created.getSeconds());
                            if (typeof (TemperatureСontrol.user) == "number") {
                                if (typeof (TemperatureСontrol.temperature) == "number") {
                                    if (typeof (TemperatureСontrol.vlazhn) == "number") {
                                        if (typeof (TemperatureСontrol.ConnectionFacilityPlacesDepartmentApplianece) == "number") {
                                            if (typeof (TemperatureСontrol.sign) == 'boolean') {
                                                AppDataSource.manager.save(TemperatureСontrol);
                                                res.write("TemperatureControlLog has been added" + JSON.stringify(TemperatureСontrol));
                                                res.end();
                                                console.log('TemperatureControl post');
                                            }
                                        }
                                    }
                                }
                            }
                            else {
                                res.write("ERROR! data error Data");
                                res.end();
                            }
                        }
                        else {
                            res.write("ERROR! Input isnt JSON");
                            res.end();
                        }
                        return [2 /*return*/];
                    });
                }); });
            }
            else if (url.toString() === "/healthpost" && method === 'POST') {
                body_2 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_2.push(chunk);
                }).on('end', function () {
                    GetData(body_2, res);
                    if (isJsonString(body_2) == true) {
                        var resjson = (JSON.parse(body_2));
                        var health = new Health_1.Health();
                        health.User = resjson.user;
                        health.ConnectionUserProfession = resjson.connectionUserProfession;
                        health.okz = resjson.okz;
                        health.anginamark = resjson.anginamark;
                        health.diagnos = resjson.diagnos;
                        health.passtowork = resjson.passtowork;
                        var created = new Date;
                        health.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        health.signSupervisor = resjson.signsupervisor;
                        health.signWorker = resjson.signworker;
                        if ((typeof (health.signSupervisor) == 'boolean' && typeof (health.signWorker) == 'boolean' && health.User != null && (health.okz != null && (typeof (health.okz) == 'boolean')) && (health.anginamark != null && (typeof (health.anginamark) == 'boolean'))) && health.diagnos != null && (health.passtowork != null && typeof (health.passtowork) == 'boolean') && typeof (health.ConnectionUserProfession) == 'number') {
                            AppDataSource.manager.save(health);
                            res.write("Health has been added" + JSON.stringify(health));
                            res.end();
                            console.log('Health post');
                        }
                        else {
                            res.write("ERROR! data error Data");
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
                body_3 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_3.push(chunk);
                }).on('end', function () {
                    GetData(body_3, res);
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
                        if (brack.user != null && typeof (brack.serveTime) == 'number' && typeof (brack.dish) == 'number' && (brack.rating == 1 || brack.rating == 2 || brack.rating == 3) && typeof (brack.timespend) == 'number' && brack.userdone != null && brack.note != null) {
                            AppDataSource.manager.save(brack);
                            res.write("BrackLog has been added" + JSON.stringify(brack));
                            res.end();
                            console.log('BrackLog post');
                        }
                        else {
                            res.write("ERROR! data error Data");
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
                body_4 = [];
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
                    if (isJsonString(body_4) == true) {
                        var resjson = (JSON.parse(body_4));
                        var user = new Client_1.User();
                        user.name = resjson.name;
                        user.fam = resjson.fam;
                        user.otch = resjson.otch;
                        user.deleted = false;
                        user.banned = false;
                        user.passwordToChange = false;
                        user.created = new Date;
                        if ((user.name != null && user.fam != null && user.otch != null && typeof (user.deleted) == "boolean" && typeof (user.banned) == "boolean")) {
                            AppDataSource.manager.save(user);
                            res.write("User has been added" + JSON.stringify(user));
                            res.end();
                            console.log('User post');
                        }
                        else {
                            res.write("ERROR! data error Data");
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
                body_5 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_5.push(chunk);
                }).on('end', function () {
                    GetData(body_5, res);
                    if (isJsonString(body_5) == true) {
                        var resjson = (JSON.parse(body_5));
                        var account = new Accounts_1.Account();
                        account.login = resjson.login;
                        account.password = resjson.password;
                        account.user = resjson.user;
                        account.created = new Date;
                        if ((account.login != null && account.password != null && account.user != null)) {
                            AppDataSource.manager.save(account);
                            res.write("Account has been added" + JSON.stringify(account));
                            res.end();
                            console.log('Account post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/categorypost" && method === 'POST') {
                body_6 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_6.push(chunk);
                }).on('end', function () {
                    GetData(body_6, res);
                    if (isJsonString(body_6) == true) {
                        var resjson = (JSON.parse(body_6));
                        var category = new Categories_1.Categories();
                        category.name = resjson.category;
                        var created = new Date;
                        category.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        if (typeof (category.name) == "string") {
                            AppDataSource.manager.save(category);
                            res.write("Connection has been added" + JSON.stringify(category));
                            res.end();
                            console.log('Connection post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/dishpost" && method === 'POST') {
                body_7 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_7.push(chunk);
                }).on('end', function () {
                    GetData(body_7, res);
                    if (isJsonString(body_7) == true) {
                        var resjson = (JSON.parse(body_7));
                        var dish = new Dishes_1.Dishes();
                        dish.active = true;
                        dish.dish = resjson.dish;
                        var created = new Date;
                        dish.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        if (typeof (dish.dish) == "string") {
                            AppDataSource.manager.save(dish);
                            res.write("Connection has been added" + JSON.stringify(dish));
                            res.end();
                            console.log('Connection post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/professionpost" && method === 'POST') {
                body_8 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_8.push(chunk);
                }).on('end', function () {
                    GetData(body_8, res);
                    if (isJsonString(body_8) == true) {
                        var resjson = (JSON.parse(body_8));
                        var profession = new Professions_1.Professions();
                        profession.name = resjson.profession;
                        if (typeof (profession.name) == "string") {
                            AppDataSource.manager.save(profession);
                            res.write("Connection has been added" + JSON.stringify(profession));
                            res.end();
                            console.log('Profession post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/professionuserpost" && method === 'POST') {
                body_9 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_9.push(chunk);
                }).on('end', function () {
                    GetData(body_9, res);
                    if (isJsonString(body_9) == true) {
                        var resjson = (JSON.parse(body_9));
                        var profession = new ConnectionUserProfession_copy_1.ConnectionUserProfession();
                        profession.User = resjson.user;
                        profession.Professions = resjson.profession;
                        var created_1 = new Date();
                        profession.created = "".concat(created_1.getDate(), "-").concat(created_1.getMonth() + 1, "-").concat(created_1.getFullYear());
                        if (typeof (profession.User) == "number" && typeof (profession.Professions) == "number") {
                            AppDataSource.manager.save(profession);
                            res.write("Connection has been added" + JSON.stringify(profession));
                            res.end();
                            console.log('Profession post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/subjectpost" && method === 'POST') {
                body_10 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_10.push(chunk);
                }).on('end', function () {
                    GetData(body_10, res);
                    if (isJsonString(body_10) == true) {
                        var resjson = (JSON.parse(body_10));
                        var object = new Objects_1.Subject();
                        object.name = resjson.name;
                        if (typeof (object.name) == "string") {
                            AppDataSource.manager.save(object);
                            res.write("Object has been added" + JSON.stringify(object));
                            res.end();
                            console.log('Object post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/placepost" && method === 'POST') {
                body_11 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_11.push(chunk);
                }).on('end', function () {
                    GetData(body_11, res);
                    if (isJsonString(body_11) == true) {
                        var created = new Date();
                        var resjson = (JSON.parse(body_11));
                        var place = new Places_1.Places();
                        place.name = resjson.name;
                        place.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        if (typeof (place.name) == 'string') {
                            AppDataSource.manager.save(place);
                            res.write("Place has been added" + JSON.stringify(place));
                            res.end();
                            console.log('Place post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/departmentpost" && method === 'POST') {
                body_12 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_12.push(chunk);
                }).on('end', function () {
                    GetData(body_12, res);
                    if (isJsonString(body_12) == true) {
                        var resjson = (JSON.parse(body_12));
                        var department = new Typedepartment_1.Typedepartment();
                        department.name = resjson.name;
                        if (typeof (department.name) == "string") {
                            AppDataSource.manager.save(department);
                            res.write("Department has been added" + JSON.stringify(department));
                            res.end();
                            console.log('Department post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/categoryondishpost" && method === 'POST') {
                body_13 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_13.push(chunk);
                }).on('end', function () {
                    GetData(body_13, res);
                    if (isJsonString(body_13) == true) {
                        var resjson = (JSON.parse(body_13));
                        var Connect = new ConnectionCategoryDish_1.ConnectionCategoryDish();
                        Connect.Dish = resjson.dish;
                        Connect.Category = resjson.category;
                        var created = new Date;
                        Connect.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        if (typeof (Connect.Dish) == "number" && typeof (Connect.Category) == 'number') {
                            AppDataSource.manager.save(Connect);
                            res.write("Connection has been added" + JSON.stringify(Connect));
                            res.end();
                            console.log('Connection post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/rolepost" && method === 'POST') {
                body_14 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_14.push(chunk);
                }).on('end', function () {
                    GetData(body_14, res);
                    if (isJsonString(body_14) == true) {
                        var resjson = (JSON.parse(body_14));
                        var role = new Roles_1.Roles();
                        role.role = resjson.role;
                        if (typeof (role.role) == "string") {
                            AppDataSource.manager.save(role);
                            res.write("Connection has been added" + JSON.stringify(role));
                            res.end();
                            console.log('Role post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/roleonuserpost" && method === 'POST') {
                body_15 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_15.push(chunk);
                }).on('end', function () {
                    GetData(body_15, res);
                    if (isJsonString(body_15) == true) {
                        var resjson = (JSON.parse(body_15));
                        var connect = new ConnectionUserRole_1.ConnectionUserRole();
                        connect.Roles = resjson.role;
                        connect.User = resjson.user;
                        var created = new Date;
                        connect.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        if (typeof (connect.Roles) == "number" && typeof (connect.User) == "number") {
                            AppDataSource.manager.save(connect);
                            res.write("Connection has been added" + JSON.stringify(connect));
                            res.end();
                            console.log('Connection post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/appliancepost" && method === 'POST') {
                body_16 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_16.push(chunk);
                }).on('end', function () {
                    GetData(body_16, res);
                    if (isJsonString(body_16) == true) {
                        var resjson = (JSON.parse(body_16));
                        var appliance = new Devices_1.Appliances();
                        appliance.name = resjson.name;
                        appliance.normalpoint = resjson.normalpoint;
                        appliance.startnormalpoint = resjson.startnormalpoint;
                        appliance.endnormalpoint = resjson.endnormalpoint;
                        if (typeof (appliance.name) == "string" && typeof (appliance.normalpoint) == "string" && typeof (appliance.startnormalpoint) == "number" && typeof (appliance.endnormalpoint) == "number") {
                            AppDataSource.manager.save(appliance);
                            res.write("Connection has been added" + JSON.stringify(appliance));
                            res.end();
                            console.log('Connection post');
                        }
                        else {
                            res.write("ERROR! data error Data");
                            res.end();
                        }
                    }
                    else {
                        res.write("ERROR! Input isnt JSON");
                        res.end();
                    }
                });
            }
            else if (url.toString() === "/appliancewithplacepost" && method === 'POST') {
                body_17 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_17.push(chunk);
                }).on('end', function () {
                    GetData(body_17, res);
                    if (isJsonString(body_17) == true) {
                        var resjson = (JSON.parse(body_17));
                        var connectionFacilityPlacesDepartmentApplianece = new ConnectionFacilityPlacesDepartmentApplianece_1.ConnectionFacilityPlacesDepartmentApplianece();
                        connectionFacilityPlacesDepartmentApplianece.Place = resjson.place;
                        connectionFacilityPlacesDepartmentApplianece.Typedepartment = resjson.department;
                        connectionFacilityPlacesDepartmentApplianece.Appliances = resjson.appliance;
                        connectionFacilityPlacesDepartmentApplianece.Subject = resjson.subject;
                        var created = new Date;
                        connectionFacilityPlacesDepartmentApplianece.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        if (typeof (connectionFacilityPlacesDepartmentApplianece.Place) == "number" && typeof (connectionFacilityPlacesDepartmentApplianece.Appliances) == "number" && typeof (connectionFacilityPlacesDepartmentApplianece.Subject) == "number" && typeof (connectionFacilityPlacesDepartmentApplianece.Typedepartment) == "number") {
                            AppDataSource.manager.save(connectionFacilityPlacesDepartmentApplianece);
                            res.write("Connection has been added" + JSON.stringify(connectionFacilityPlacesDepartmentApplianece));
                            res.end();
                            console.log('Connection post');
                        }
                        else {
                            res.write("ERROR! data error Data");
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
                body_18 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_18.push(chunk);
                }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var resjson, userRepository, userToUpdate;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                GetData(body_18, res);
                                if (!(isJsonString(body_18) == true)) return [3 /*break*/, 2];
                                resjson = (JSON.parse(body_18));
                                userRepository = AppDataSource.getRepository(Client_1.User);
                                return [4 /*yield*/, userRepository.findOneBy({
                                        id: resjson.user
                                    })];
                            case 1:
                                userToUpdate = _a.sent();
                                userToUpdate.deleted = resjson.deleted;
                                userToUpdate.banned = resjson.banned;
                                userToUpdate.passwordToChange = resjson.passwordToChange;
                                if ((typeof (resjson.banned) == 'boolean' && typeof (resjson.deleted) == 'boolean' && typeof (resjson.passwordToChange) == 'boolean')) {
                                    userRepository.manager.save(userToUpdate);
                                    res.write("User has been updated" + JSON.stringify(userToUpdate));
                                    res.end();
                                    console.log('User update');
                                }
                                else {
                                    res.write("ERROR! data error Data");
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
            else if (url.toString() === "/passwordrestore" && method === 'POST') {
                body_19 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_19.push(chunk);
                }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var resjson, accRepository, accRepositoyrToUpdate;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                GetData(body_19, res);
                                if (!(isJsonString(body_19) == true)) return [3 /*break*/, 2];
                                resjson = (JSON.parse(body_19));
                                accRepository = AppDataSource.getRepository(Accounts_1.Account);
                                return [4 /*yield*/, accRepository.findOneBy({
                                        id: resjson.account
                                    })];
                            case 1:
                                accRepositoyrToUpdate = _a.sent();
                                accRepositoyrToUpdate.password = resjson.password;
                                if ((resjson.password != null)) {
                                    accRepository.manager.save(accRepositoyrToUpdate);
                                    res.write("Account has been updated" + JSON.stringify(accRepositoyrToUpdate));
                                    res.end();
                                    console.log('Password update');
                                }
                                else {
                                    res.write("ERROR! data error Data");
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
            else if (url.toString() === "/toggledishinmenu" && method === 'POST') {
                body_20 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_20.push(chunk);
                }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var resjson, dishRepository, dishRepositoyrToUpdate;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                GetData(body_20, res);
                                if (!(isJsonString(body_20) == true)) return [3 /*break*/, 2];
                                resjson = (JSON.parse(body_20));
                                dishRepository = AppDataSource.getRepository(Dishes_1.Dishes);
                                return [4 /*yield*/, dishRepository.findOneBy({
                                        id: resjson.dish
                                    })];
                            case 1:
                                dishRepositoyrToUpdate = _a.sent();
                                dishRepositoyrToUpdate.active = resjson.active;
                                if ((typeof (resjson.active) == 'boolean') && (dishRepositoyrToUpdate != null)) {
                                    dishRepository.manager.save(dishRepositoyrToUpdate);
                                    res.write("Dish has been toggled" + JSON.stringify(dishRepositoyrToUpdate));
                                    res.end();
                                    console.log('Dish toggled');
                                }
                                else {
                                    res.write("ERROR! data error Data");
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
            else if (url.toString() === "/updatedish" && method === 'POST') {
                body_21 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_21.push(chunk);
                }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var resjson, dishRepository, dishRepositoyrToUpdate;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                GetData(body_21, res);
                                if (!(isJsonString(body_21) == true)) return [3 /*break*/, 2];
                                resjson = (JSON.parse(body_21));
                                dishRepository = AppDataSource.getRepository(Dishes_1.Dishes);
                                return [4 /*yield*/, dishRepository.findOneBy({
                                        id: resjson.id
                                    })];
                            case 1:
                                dishRepositoyrToUpdate = _a.sent();
                                dishRepositoyrToUpdate.dish = resjson.dish;
                                if ((typeof (resjson.dish) == 'string')) {
                                    dishRepository.manager.save(dishRepositoyrToUpdate);
                                    console.log('Dish updated');
                                    res.write("Dish has been updated" + JSON.stringify(dishRepositoyrToUpdate));
                                    res.end();
                                }
                                else {
                                    res.write("ERROR! data error Data");
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
                body_22 = [];
                req.on('error', function (err) {
                    console.error(err);
                }).on('data', function (chunk) {
                    body_22.push(chunk);
                }).on('end', function () { return __awaiter(_this, void 0, void 0, function () {
                    var resjson, userRepository, userRepositoyrToUpdate;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                GetData(body_22, res);
                                if (!(isJsonString(body_22) == true)) return [3 /*break*/, 2];
                                resjson = (JSON.parse(body_22));
                                userRepository = AppDataSource.getRepository(ConnectionUserRole_1.ConnectionUserRole);
                                return [4 /*yield*/, userRepository.findOneBy({
                                        User: resjson.user
                                    })];
                            case 1:
                                userRepositoyrToUpdate = _a.sent();
                                userRepositoyrToUpdate.Roles = resjson.role;
                                if ((typeof (userRepositoyrToUpdate.Roles) == 'number') && (userRepositoyrToUpdate != null)) {
                                    userRepository.manager.save(userRepositoyrToUpdate);
                                    res.write("Role has been updated" + JSON.stringify(userRepositoyrToUpdate));
                                    res.end();
                                    console.log('Role updated');
                                }
                                else {
                                    res.write("ERROR! data error Data");
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
                Get(Client_1.User);
            }
            else if (url.toString() === "/categoriesget") {
                Get(Categories_1.Categories);
            }
            else if (url.toString() === '/connectioncategorydishget') {
                userRepository = AppDataSource.getRepository(ConnectionCategoryDish_1.ConnectionCategoryDish);
                userRepository.find({ relations: { Dish: true, Category: true } }).then(function (data) { return writeend(JSON.stringify(data)); });
            }
            else if (url.toString() === '/connectionuserroleget') {
                userRepository = AppDataSource.getRepository(ConnectionUserRole_1.ConnectionUserRole);
                userRepository.find({ relations: { User: true, Roles: true } }).then(function (data) { return writeend(JSON.stringify(data)); });
            }
            else if (url.toString() === '/rolesget') {
                Get(Roles_1.Roles);
            }
            else if (url.toString() === '/departmentsget') {
                Get(Typedepartment_1.Typedepartment);
            }
            else if (url.toString() === '/placesget') {
                Get(Places_1.Places);
            }
            else if (url.toString() === '/appliancesget') {
                Get(Devices_1.Appliances);
            }
            else if (url.toString() === '/applianceofplacesget') {
                userRepository = AppDataSource.getRepository(ConnectionFacilityPlacesDepartmentApplianece_1.ConnectionFacilityPlacesDepartmentApplianece);
                userRepository.find({ relations: { Subject: true, Place: true, Typedepartment: true, Appliances: true } }).then(function (data) { return writeend(JSON.stringify(data)); });
            }
            else if (url.toString() === '/subjectsget') {
                Get(Objects_1.Subject);
            }
            else if (url.toString() === "/professionsget") {
                Get(Professions_1.Professions);
            }
            else if (url.toString() === "/professiononuserget") {
                userRepository = AppDataSource.getRepository(ConnectionUserProfession_copy_1.ConnectionUserProfession);
                userRepository.find({ relations: { User: true, Professions: true } }).then(function (data) { return writeend(JSON.stringify(data)); });
            }
            else if (url.toString() === "/dishesget") {
                Get(Dishes_1.Dishes);
            }
            else if (url.toString() === "/brackget") {
                Get(Brack_1.Bracklog);
            }
            else if (url.toString() === "/accountget") {
                Get(Accounts_1.Account);
            }
            else if (url.toString() === "/tempcontrolget") {
                userRepository = AppDataSource.getRepository(Temperature_ontrol_1.TemperatureСontrolLog);
                userRepository.find({ relations: { ConnectionFacilityPlacesDepartmentApplianece: { Subject: true, Typedepartment: true, Appliances: true, Place: true } } }).then(function (data) { return writeend(JSON.stringify(data)); });
            }
            else if (url.toString() === "/healthget") {
                Get(Health_1.Health);
            }
            else if (url.toString() === '/dishes1') {
                created = new Date;
                for (i_1 = 0; i_1 <= listdishesgarnire.length - 1; i_1++) {
                    dishes = new Dishes_1.Dishes();
                    dishes.dish = listdishesgarnire[i_1];
                    dishes.active = true;
                    dishes.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(dishes);
                }
                for (i_2 = 0; i_2 <= listdishesnapit.length - 1; i_2++) {
                    dishes = new Dishes_1.Dishes();
                    dishes.dish = listdishesnapit[i_2];
                    dishes.active = true;
                    dishes.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(dishes);
                }
                for (i_3 = 0; i_3 <= listdishespech.length - 1; i_3++) {
                    dishes = new Dishes_1.Dishes();
                    dishes.dish = listdishespech[i_3];
                    dishes.active = true;
                    dishes.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(dishes);
                }
                for (i_4 = 0; i_4 <= listdishessalats.length - 1; i_4++) {
                    dishes = new Dishes_1.Dishes();
                    dishes.dish = listdishessalats[i_4];
                    dishes.active = true;
                    dishes.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(dishes);
                }
                res.write("Done dishes");
                res.end();
            }
            else if (url.toString() === '/category1') {
                created = new Date;
                for (i = 0; i <= listcategory.length - 1; i++) {
                    category = new Categories_1.Categories;
                    category.name = listcategory[i];
                    category.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(category);
                }
                res.write("Done categories");
                res.end();
            }
            else if (url.toString() === '/roles1') {
                created = new Date;
                for (i = 0; i <= listroles.length - 1; i++) {
                    role = new Roles_1.Roles;
                    role.role = listroles[i];
                    AppDataSource.manager.save(role);
                }
                res.write("Done roles");
                res.end();
            }
            else if (url.toString() === '/connectcategory1') {
                created = new Date;
                for (i = 1; i <= 55; i++) {
                    connect = new ConnectionCategoryDish_1.ConnectionCategoryDish;
                    connect.Dish = i;
                    connect.Category = 2;
                    connect.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(connect);
                }
                for (i = 56; i <= 63; i++) {
                    connect = new ConnectionCategoryDish_1.ConnectionCategoryDish;
                    connect.Dish = i;
                    connect.Category = 3;
                    connect.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(connect);
                }
                for (i = 64; i <= 69; i++) {
                    connect = new ConnectionCategoryDish_1.ConnectionCategoryDish;
                    connect.Dish = i;
                    connect.Category = 4;
                    connect.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(connect);
                }
                for (i = 70; i <= 75; i++) {
                    connect = new ConnectionCategoryDish_1.ConnectionCategoryDish;
                    connect.Dish = i;
                    connect.Category = 5;
                    connect.created = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                    AppDataSource.manager.save(connect);
                }
                res.write("Done connection");
                res.end();
            }
            else if (url.toString() === '/users1') {
                for (i_5 = 0; i_5 < listnames.length; i_5++) {
                    created = new Date();
                    user = new Client_1.User();
                    user.name = listnames[i_5];
                    user.fam = listfam[i_5];
                    user.otch = listotch[i_5];
                    user.created = created;
                    user.deleted = false;
                    user.banned = false;
                    user.passwordToChange = false;
                    AppDataSource.manager.save(user);
                }
                res.write("Done users");
                res.end();
            }
            else if (url.toString() === '/professions1') {
                for (i_6 = 0; i_6 <= listprof.length - 1; i_6++) {
                    prof = new Professions_1.Professions();
                    prof.name = listprof[i_6];
                    AppDataSource.manager.save(prof);
                }
                res.write("Done profs");
                res.end();
            }
            else {
                res.write("ERROR! No API");
                res.end();
            }
            return [2 /*return*/];
        });
    });
}).listen(8080, function () {
    console.log("Server started at 8080 port");
});
