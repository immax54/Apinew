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
exports.tempControlPost = void 0;
var TemperatureControl_1 = require("../entities/TemperatureControl");
function tempControlPost(body, AppDataSource, res, req) {
    return __awaiter(this, void 0, void 0, function () {
        function isJsonString(str) {
            try {
                JSON.parse(str);
            }
            catch (e) {
                return false;
            }
            return true;
        }
        // function sleep(ms: number) {
        //   return new Promise((resolve) => {
        //     setTimeout(resolve, ms);
        //   });
        // }
        function GetData(response) {
            response.on("error", function (err) {
                response.write(err);
            });
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
        }
        var _this = this;
        return __generator(this, function (_a) {
            req
                .on("error", function (err) {
                res.write(err);
            })
                .on("data", function (chunk) {
                body.push(chunk);
            })
                .on("end", function () { return __awaiter(_this, void 0, void 0, function () {
                var resjson, Temperature??ontrol, created;
                return __generator(this, function (_a) {
                    GetData(res);
                    if (isJsonString(body.toString()) === true) {
                        resjson = JSON.parse(body.toString());
                        Temperature??ontrol = new TemperatureControl_1.TemperatureControlLog();
                        Temperature??ontrol.user = resjson.user;
                        Temperature??ontrol.temperature = resjson.temperature;
                        Temperature??ontrol.vlazhn = resjson.vlazhn;
                        Temperature??ontrol.sign = false;
                        Temperature??ontrol.Appliances = resjson.appliance;
                        created = new Date();
                        Temperature??ontrol.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                        Temperature??ontrol.time = "".concat(created.getHours(), ":").concat(created.getMinutes(), ":").concat(created.getSeconds());
                        if (typeof Temperature??ontrol.user === "number") {
                            if (typeof Temperature??ontrol.temperature === "number") {
                                if (typeof Temperature??ontrol.vlazhn === "number") {
                                    if (typeof Temperature??ontrol.Appliances === "number") {
                                        if (typeof Temperature??ontrol.sign === "boolean") {
                                            AppDataSource.manager.save(Temperature??ontrol);
                                            // async function NotificationPost(data: number) {
                                            //   await sleep(2500);
                                            //   const Notification = new NotificationsTempcontrolLog();
                                            //   Notification.User = resjson.user;
                                            //   created = new Date();
                                            //   const datanew: any[string] = data + 1;
                                            //   Notification.TemperatureControlLog = datanew;
                                            //   Notification.statusOfSign = false;
                                            //   Notification.statusNotification = false;
                                            //   AppDataSource.manager.save(Notification);
                                            //   res.write(JSON.stringify(Notification));
                                            // }
                                            // const { id } = Temperature??ontrol;
                                            // const FindOne = TempcontrolRepository.find({
                                            //   select: { id: true },
                                            //   where: { id },
                                            // }).then((data) => data.slice(-1)[0].id);
                                            // FindOne.then((data) => NotificationPost(data));
                                            res.write("TemperatureControlLog has been added".concat(JSON.stringify(Temperature??ontrol)));
                                            res.end();
                                            // console.log("TemperatureControl post");
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
            return [2 /*return*/];
        });
    });
}
exports.tempControlPost = tempControlPost;
