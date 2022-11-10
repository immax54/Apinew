"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Bracklog = void 0;
var typeorm_1 = require("typeorm");
var Client_1 = require("./Client");
var Bracklog = /** @class */ (function () {
    function Bracklog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Bracklog.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Bracklog.prototype, "dish");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Bracklog.prototype, "timespend");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Bracklog.prototype, "dishmark");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Bracklog.prototype, "acception");
    __decorate([
        (0, typeorm_1.Column)('date')
    ], Bracklog.prototype, "created");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Client_1.User; }, function (user) { return user.Bracklog; }),
        (0, typeorm_1.JoinColumn)({
            name: 'user_id'
        })
    ], Bracklog.prototype, "user");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Client_1.User; }, function (userdone) { return userdone.Bracklog; }),
        (0, typeorm_1.JoinColumn)({
            name: 'user_done'
        })
    ], Bracklog.prototype, "userdone");
    Bracklog = __decorate([
        (0, typeorm_1.Entity)("BrackLog")
    ], Bracklog);
    return Bracklog;
}());
exports.Bracklog = Bracklog;
