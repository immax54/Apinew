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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
var typeorm_1 = require("typeorm");
// var XLSX = require('xlsx');
var http = require("http");
var ngrok = require("ngrok");
var arrays_1 = require("./data/arrays");
var User_1 = require("./entities/User");
var Brack_1 = require("./entities/Brack");
var Health_1 = require("./entities/Health");
var TemperatureControl_1 = require("./entities/TemperatureControl");
var Accounts_1 = require("./entities/Accounts");
var Professions_1 = require("./entities/Professions");
var Categories_1 = require("./entities/Categories");
var Dishes_1 = require("./entities/Dishes");
var Roles_1 = require("./entities/Roles");
var ConnectionUserRole_1 = require("./entities/ConnectionUserRole");
var Objects_1 = require("./entities/Objects");
var Places_1 = require("./entities/Places");
var Department_1 = require("./entities/Department");
var ConnectionUserProfession_1 = require("./entities/ConnectionUserProfession");
var Devices_1 = require("./entities/Devices");
var NotificationsTempcontrolLog_1 = require("./entities/NotificationsTempcontrolLog");
var ConnectionSubjectPlaces_1 = require("./entities/ConnectionSubjectPlaces");
var tempControlPost_1 = require("./methods/tempControlPost");
var healthPost_1 = require("./methods/healthPost");
var brackPost_1 = require("./methods/brackPost");
var userPost_1 = require("./methods/userPost");
var accountPost_1 = require("./methods/accountPost");
var categoryPost_1 = require("./methods/categoryPost");
var dishPost_1 = require("./methods/dishPost");
var subjectPlacePost_1 = require("./methods/subjectPlacePost");
var proffessionPost_1 = require("./methods/proffessionPost");
var professionUserPost_1 = require("./methods/professionUserPost");
var subjectPost_1 = require("./methods/subjectPost");
var placePost_1 = require("./methods/placePost");
var departmentPost_1 = require("./methods/departmentPost");
var appliancePost_1 = require("./methods/appliancePost");
var toggleInMenu_1 = require("./methods/toggleInMenu");
var userGet_1 = require("./methods/userGet");
var placesGet_1 = require("./methods/placesGet");
var applianceGet_1 = require("./methods/applianceGet");
var AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "pi",
    password: "pi",
    database: "postgres",
    entities: [
        User_1.User,
        NotificationsTempcontrolLog_1.NotificationsTempcontrolLog,
        ConnectionSubjectPlaces_1.ConnectionSubjectPlaces,
        Brack_1.Bracklog,
        Devices_1.Appliance,
        Health_1.Health,
        TemperatureControl_1.TemperatureControlLog,
        Accounts_1.Account,
        Dishes_1.Dishes,
        Professions_1.Profession,
        Categories_1.Categories,
        Roles_1.Roles,
        ConnectionUserRole_1.ConnectionUserRole,
        Places_1.Places,
        Objects_1.Subject,
        Department_1.Department,
        ConnectionUserProfession_1.ConnectionUserProfession,
    ],
    synchronize: true
});
AppDataSource.initialize()
    .then(function () {
    // console.log("Connected to DB");
})["catch"](function (error) { return error; });
function isJsonString(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
function GetData(res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
}
ngrok.authtoken("2Gj2e1okLI8jtft3cqzgiDaztCJ_795j3CUFjQGGhvgcLSu4r");
ngrok
    .connect(8080)
    .then(function (data) { return console.log(data); })["catch"](function (error) { return error; });
http
    .createServer(function (req, res) {
    var _this = this;
    var url = req.url;
    var method = req.method;
    function Get(Class) {
        var userRepository = AppDataSource.getRepository(Class);
        userRepository
            .find()
            .then(function (data) { return writeend(JSON.stringify(data)); })["catch"](function (error) { return error; });
        return true;
    }
    function writeend(data) {
        res.write(data);
        res.end();
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
    res.setHeader("Access-Control-Max-Age", 86400000000);
    if (url.toString() === "/tempControlPost" && method === "POST") {
        var body = [];
        (0, tempControlPost_1.tempControlPost)(body, AppDataSource, res, req);
    }
    else if (url.toString() === "/healthPost" && method === "POST") {
        var body = [];
        (0, healthPost_1.healthPost)(body, AppDataSource, res, req);
    }
    else if (url.toString() === "/brackPost" && method === "POST") {
        var body_1 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_1.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GetData(res);
                        if (!(isJsonString(body_1.toString()) === true)) return [3 /*break*/, 2];
                        res.statusCode = 200;
                        res.setHeader("Content-Type", "application/json");
                        return [4 /*yield*/, (0, brackPost_1.brackPost)(body_1, AppDataSource, res).then(function (data) { return data; })];
                    case 1:
                        if ((_a.sent()) === true) {
                            res.write("Post Brackpost");
                            res.end();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        res.write("Error JSON");
                        res.end();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    else if (url.toString() === "/userPost" && method === "POST") {
        var body_2 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_2.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GetData(res);
                (0, userPost_1.userPost)(body_2, AppDataSource, res);
                return [2 /*return*/];
            });
        }); });
    }
    else if (url.toString() === "/accountPost" && method === "POST") {
        var body = [];
        (0, accountPost_1.accountPost)(body, AppDataSource, res, req);
    }
    else if (url.toString() === "/categoryPost" && method === "POST") {
        var body_3 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_3.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, categoryPost_1.categoryPost)(body_3, AppDataSource, res);
                return [2 /*return*/];
            });
        }); });
    }
    else if (url.toString() === "/dishPost" && method === "POST") {
        var body_4 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_4.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                (0, dishPost_1.dishPost)(body_4, AppDataSource, res);
                return [2 /*return*/];
            });
        }); });
    }
    else if (url.toString() === "/professionPost" && method === "POST") {
        var body_5 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_5.push(chunk);
        })
            .on("end", function () {
            (0, proffessionPost_1.proffessionPost)(body_5, AppDataSource, res);
        });
    }
    else if (url.toString() === "/professionUserPost" && method === "POST") {
        var body_6 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_6.push(chunk);
        })
            .on("end", function () {
            (0, professionUserPost_1.proffessionUserPost)(body_6, AppDataSource, res);
        });
    }
    else if (url.toString() === "/subjectPlacePost" && method === "POST") {
        var body = [];
        (0, subjectPlacePost_1.subjectPlacePost)(body, AppDataSource, res, req);
    }
    else if (url.toString() === "/subjectPost" && method === "POST") {
        var body_7 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_7.push(chunk);
        })
            .on("end", function () {
            (0, subjectPost_1.subjectPost)(body_7, AppDataSource, res);
        });
    }
    else if (url.toString() === "/placePost" && method === "POST") {
        var body_8 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_8.push(chunk);
        })
            .on("end", function () {
            (0, placePost_1.placePost)(body_8, AppDataSource, res);
        });
    }
    else if (url.toString() === "/departmentPost" && method === "POST") {
        var body_9 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_9.push(chunk);
        })
            .on("end", function () {
            (0, departmentPost_1.departmentPost)(body_9, AppDataSource, res);
        });
    }
    else if (url.toString() === "/rolePost" && method === "POST") {
        var body_10 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_10.push(chunk);
        })
            .on("end", function () {
            GetData(res);
            if (isJsonString(body_10.toString()) === true) {
                var resjson = JSON.parse(body_10.toString());
                var role = new Roles_1.Roles();
                role.name = resjson.name;
                if (typeof role.name === "string") {
                    AppDataSource.manager.save(role);
                    res.write("Role has been added".concat(JSON.stringify(role)));
                    res.end();
                    // console.log("Role post");
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
    else if (url.toString() === "/roleOnUserPost" && method === "POST") {
        var body_11 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_11.push(chunk);
        })
            .on("end", function () {
            GetData(res);
            if (isJsonString(body_11.toString()) === true) {
                var resjson = JSON.parse(body_11.toString());
                var connect = new ConnectionUserRole_1.ConnectionUserRole();
                connect.Role = resjson.role;
                connect.Users = resjson.user;
                if (typeof connect.Role === "number" &&
                    typeof connect.Users === "number") {
                    AppDataSource.manager.save(connect);
                    res.write("Connection has been added".concat(JSON.stringify(connect)));
                    res.end();
                    //  console.log("Connection post");
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
    else if (url.toString() === "/appliancePost" && method === "POST") {
        var body = [];
        (0, appliancePost_1.appliancePost)(body, AppDataSource, res, req);
    }
    else if (url.toString() === "/userUpdate" && method === "POST") {
        var body = [];
        (0, userPost_1.userPost)(body, AppDataSource, res);
    }
    else if (url.toString() === "/passwordRestore" && method === "POST") {
        var body_12 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_12.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            var resjson, accRepository, accRepositoyrToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GetData(res);
                        if (!(isJsonString(body_12.toString()) === true)) return [3 /*break*/, 2];
                        resjson = JSON.parse(body_12.toString());
                        accRepository = AppDataSource.getRepository(Accounts_1.Account);
                        return [4 /*yield*/, accRepository.findOneBy({
                                id: resjson.account
                            })];
                    case 1:
                        accRepositoyrToUpdate = _a.sent();
                        accRepositoyrToUpdate.password = resjson.password;
                        if (resjson.password != null) {
                            accRepository.manager.save(accRepositoyrToUpdate);
                            res.write("Account has been updated".concat(JSON.stringify(accRepositoyrToUpdate)));
                            res.end();
                            //   console.log("Password update");
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
    else if (url.toString() === "/toggleDishInMenu" && method === "POST") {
        var body = [];
        (0, toggleInMenu_1.toggleInMenu)(body, AppDataSource, res, req);
    }
    else if (url.toString() === "/updateDish" && method === "POST") {
        var body_13 = [];
        req
            .on("error", function (err) {
            res.write(err);
        })
            .on("data", function (chunk) {
            body_13.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            var resjson, dishRepository, dishRepositoyrToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GetData(res);
                        if (!(isJsonString(body_13.toString()) === true)) return [3 /*break*/, 2];
                        resjson = JSON.parse(body_13.toString());
                        dishRepository = AppDataSource.getRepository(Dishes_1.Dishes);
                        return [4 /*yield*/, dishRepository.findOneBy({
                                id: resjson.id
                            })];
                    case 1:
                        dishRepositoyrToUpdate = _a.sent();
                        dishRepositoyrToUpdate.dish = resjson.dish;
                        if (typeof resjson.dish === "string") {
                            dishRepository.manager.save(dishRepositoyrToUpdate);
                            // console.log("Dish updated");
                            res.write("Dish has been updated".concat(JSON.stringify(dishRepositoyrToUpdate)));
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
    else if (url.toString() === "/roleonUserUpdate" && method === "POST") {
        var body_14 = [];
        req
            .on("data", function (chunk) {
            body_14.push(chunk);
        })
            .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
            var resjson, userRepository, userRepositoyrToUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GetData(res);
                        if (!(isJsonString(body_14.toString()) === true)) return [3 /*break*/, 2];
                        resjson = JSON.parse(body_14.toString());
                        userRepository = AppDataSource.getRepository(ConnectionUserRole_1.ConnectionUserRole);
                        return [4 /*yield*/, userRepository.findOneBy({
                                Users: resjson.user
                            })];
                    case 1:
                        userRepositoyrToUpdate = _a.sent();
                        userRepositoyrToUpdate.Role = resjson.role;
                        if (typeof userRepositoyrToUpdate.Role === "number" &&
                            userRepositoyrToUpdate != null) {
                            userRepository.manager.save(userRepositoyrToUpdate);
                            res.write("Role has been updated".concat(JSON.stringify(userRepositoyrToUpdate)));
                            res.end();
                            // console.log("Role updated");
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
    else if (url.toString() === "/userGetDetail" && method === "POST") {
        var body = [];
        (0, userGet_1.getUser)(AppDataSource, res, body, req);
    }
    else if (url.toString() === "/usersGet") {
        Get(User_1.User);
    }
    else if (url.toString() === "/categoriesGet") {
        Get(Categories_1.Categories);
    }
    else if (url.toString() === "/rolesGet") {
        Get(Roles_1.Roles);
    }
    else if (url.toString() === "/departmentsGet") {
        Get(Department_1.Department);
    }
    else if (url.toString() === "/placesGet") {
        (0, placesGet_1.placesGet)(AppDataSource, res);
    }
    else if (url.toString() === "/appliancesGet") {
        (0, applianceGet_1.applianceGet)(AppDataSource, res);
    }
    else if (url.toString() === "/subjectsGet") {
        Get(Objects_1.Subject);
    }
    else if (url.toString() === "/professionsGet") {
        Get(Professions_1.Profession);
    }
    else if (url.toString() === "/dishesGet") {
        var rolesRepository = AppDataSource.getRepository(Dishes_1.Dishes);
        rolesRepository
            .createQueryBuilder("Dishes")
            .leftJoin("Dishes.Category", "Category")
            .addSelect("Category.name")
            .getMany()
            .then(function (data) { return writeend(JSON.stringify(data)); })["catch"](function (err) { return err; });
        //  return true;
    }
    else if (url.toString() === "/brackGet") {
        Get(Brack_1.Bracklog);
    }
    else if (url.toString() === "/accountGet") {
        Get(Accounts_1.Account);
    }
    else if (url.toString() === "/tempControlGet") {
        var TempcontrolRepository = AppDataSource.getRepository(TemperatureControl_1.TemperatureControlLog);
        TempcontrolRepository.createQueryBuilder("Tempcontrol");
        Get(TemperatureControl_1.TemperatureControlLog);
        // .leftJoin("Tempcontrol.Appliance", "Appliance")
        // .addSelect(["Appliance.name"])
        // .leftJoin("Appliance.Subject", "Subject")
        // .addSelect(["Subject.name"])
        // .leftJoin("Appliance.Place", "Place")
        // .addSelect(["Place.name"])
        // .leftJoin("Appliance.Department", "Department")
        // .addSelect(["Department.name"])
        // .getMany()
        // .then((data) => writeend(JSON.stringify(data)));
    }
    else if (url.toString() === "/healthget") {
        Get(Health_1.Health);
    }
    // else if (url.toString() === "/dishes1") {
    //   for (let i = 0; i <= listdishesgarnire.length - 1; i++) {
    //     const dishes = new Dishes();
    //     dishes.dish = listdishesgarnire[i];
    //     dishes.active = true;
    //     dishes.Category = 1;
    //     AppDataSource.manager.save(dishes);
    //   }
    //   for (let i = 0; i <= listdishesnapit.length - 1; i++) {
    //     const dishes = new Dishes();
    //     dishes.dish = listdishesnapit[i];
    //     dishes.active = true;
    //     dishes.Category = 2;
    //     AppDataSource.manager.save(dishes);
    //   }
    //   // for (let i = 0; i <= listdishespech.length - 1; i++) {
    //   //   const dishes = new Dishes();
    //   //   dishes.dish = listdishespech[i];
    //   //   dishes.active = true;
    //   //   dishes.Category = 3;
    //   //   AppDataSource.manager.save(dishes);
    //   // }
    //   for (let i = 0; i <= listdishessalats.length - 1; i++) {
    //     const dishes = new Dishes();
    //     dishes.dish = listdishessalats[i];
    //     dishes.active = true;
    //     dishes.Category = 4;
    //     AppDataSource.manager.save(dishes);
    //   }
    //   res.write("Done dishes");
    //   res.end();
    // }
    else if (url.toString() === "/category1") {
        for (var i = 0; i <= arrays_1.listcategory.length - 1; i++) {
            var category = new Categories_1.Categories();
            category.name = arrays_1.listcategory[i];
            AppDataSource.manager.save(category);
        }
        res.write("Done categories");
        res.end();
    }
    else if (url.toString() === "/roles1") {
        for (var i = 0; i <= arrays_1.listroles.length - 1; i++) {
            var role = new Roles_1.Roles();
            role.name = arrays_1.listroles[i];
            AppDataSource.manager.save(role);
        }
        res.write("Done roles");
        res.end();
    }
    else if (url.toString() === "/users1") {
        for (var i = 0; i < arrays_1.listnames.length; i++) {
            var user = new User_1.User();
            user.name = arrays_1.listnames[i];
            user.surname = arrays_1.listfam[i];
            user.otch = arrays_1.listotch[i];
            user.deleted = false;
            user.banned = false;
            AppDataSource.manager.save(user);
        }
        res.write("Done users");
        res.end();
    }
    else if (url.toString() === "/professions1") {
        for (var i = 0; i <= arrays_1.listprof.length - 1; i++) {
            var prof = new Professions_1.Profession();
            prof.name = arrays_1.listprof[i];
            AppDataSource.manager.save(prof);
        }
        res.write("Done profs");
        res.end();
    }
    else {
        res.write("ERROR! No API");
        res.end();
    }
})
    .listen(8080, function () {
    // console.log("Server started at 8080 port");
});
