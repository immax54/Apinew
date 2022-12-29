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
exports.brackPost = void 0;
var Brack_1 = require("../entities/Brack");
function brackPost(body, AppDataSource, res) {
    return __awaiter(this, void 0, void 0, function () {
        function isJsonString(str) {
            try {
                JSON.parse(str.toString());
            }
            catch (e) {
                return false;
            }
            return true;
        }
        function GetData(response) {
            response.on("error", function (err) {
                res.write(err);
            });
            response.statusCode = 500;
            response.setHeader("Content-Type", "application/json");
        }
        var resjson, brack, created;
        return __generator(this, function (_a) {
            GetData(res);
            if (isJsonString(body) === true) {
                resjson = JSON.parse(body.toString());
                brack = new Brack_1.Bracklog();
                brack.user = resjson.user;
                brack.serveTime = resjson.serveTime;
                brack.dish = resjson.dish;
                brack.rating = resjson.rating;
                brack.timespend = resjson.timespend;
                brack.userdone = resjson.userdone;
                brack.note = resjson.note;
                created = new Date();
                brack.date = "".concat(created.getDate(), "-").concat(created.getMonth() + 1, "-").concat(created.getFullYear());
                if (brack.user != null &&
                    typeof brack.serveTime === "number" &&
                    typeof brack.dish === "number" &&
                    (brack.rating === 1 || brack.rating === 2 || brack.rating === 3) &&
                    typeof brack.timespend === "number" &&
                    brack.userdone != null &&
                    brack.note != null) {
                    AppDataSource.manager.save(brack);
                    res.write("Brackpost has been added".concat(JSON.stringify(brack)));
                    res.end();
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, res.write("Data Error ")];
            }
            return [2 /*return*/, false];
        });
    });
}
exports.brackPost = brackPost;
