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
exports.toggleInMenu = void 0;
var Dishes_1 = require("../entities/Dishes");
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
    res.on("error", function (err) {
        res.write(err);
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
}
function toggleInMenu(body, AppDataSource, res, req) {
    return __awaiter(this, void 0, void 0, function () {
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
                var resjson, i, dishRepository, dishRepositoyrToUpdate, i, dishRepository, dishRepositoyrToUpdate_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            GetData(res);
                            if (!(isJsonString(body.toString()) === true)) return [3 /*break*/, 9];
                            resjson = JSON.parse(body.toString());
                            if (!(typeof resjson.dishToggleIn === "object" &&
                                typeof resjson.dishToggleOff === "object")) return [3 /*break*/, 4];
                            i = 0;
                            _a.label = 1;
                        case 1:
                            if (!(i < resjson.dishToggleIn.length)) return [3 /*break*/, 4];
                            dishRepository = AppDataSource.getRepository(Dishes_1.Dishes);
                            if (typeof resjson.dishToggleIn[i] !== "number") {
                                res.write("ERROR! dish ".concat(resjson.dish[i], " not number error"));
                                res.end;
                            }
                            return [4 /*yield*/, dishRepository.findOneBy({
                                    id: resjson.dishToggleIn[i]
                                })];
                        case 2:
                            dishRepositoyrToUpdate = _a.sent();
                            dishRepositoyrToUpdate.active = true;
                            dishRepository.manager.save(dishRepositoyrToUpdate);
                            _a.label = 3;
                        case 3:
                            i++;
                            return [3 /*break*/, 1];
                        case 4:
                            i = 0;
                            _a.label = 5;
                        case 5:
                            if (!(i < resjson.dishToggleOff.length)) return [3 /*break*/, 8];
                            dishRepository = AppDataSource.getRepository(Dishes_1.Dishes);
                            if (typeof resjson.dishToggleOff[i] !== "number") {
                                res.write("ERROR! dish ".concat(resjson.dish[i], " not number error"));
                                res.end;
                            }
                            return [4 /*yield*/, dishRepository.findOneBy({
                                    id: resjson.dishToggleOff[i]
                                })];
                        case 6:
                            dishRepositoyrToUpdate_1 = _a.sent();
                            dishRepositoyrToUpdate_1.active = false;
                            dishRepository.manager.save(dishRepositoyrToUpdate_1);
                            res.write("Dish has been toggled".concat(JSON.stringify(dishRepositoyrToUpdate_1)));
                            res.end();
                            _a.label = 7;
                        case 7:
                            i++;
                            return [3 /*break*/, 5];
                        case 8: return [3 /*break*/, 10];
                        case 9:
                            res.write("ERROR! dish isnt array error");
                            res.end();
                            _a.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
}
exports.toggleInMenu = toggleInMenu;
;
