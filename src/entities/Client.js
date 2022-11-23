"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Accounts_1 = require("./Accounts");
var Brack_1 = require("./Brack");
var Health_1 = require("./Health");
var Temperature_ontrol_1 = require("./Temperature\u0421ontrol");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "fam");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "otch");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "role");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], User.prototype, "deleted");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], User.prototype, "banned");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], User.prototype, "created");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Brack_1.Bracklog; }, function (Bracklog) { return Bracklog.user; }, {
            cascade: true
        })
    ], User.prototype, "Bracklog");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Brack_1.Bracklog; }, function (Bracklog) { return Bracklog.userdone; }, {
            cascade: true
        }),
        (0, typeorm_1.OneToMany)(function () { return Accounts_1.Account; }, function (Account) { return Account.user; }, {
            cascade: true
        })
    ], User.prototype, "Account");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Health_1.Health; }, function (Health) { return Health.User; }, {
            cascade: true
        })
    ], User.prototype, "Health");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Temperature_ontrol_1.TemperatureСontrolLog; }, function (TemperatureСontrolLog) { return TemperatureСontrolLog.user; }, {
            cascade: true
        })
    ], User.prototype, "Temperature\u0421ontrolLog");
    User = __decorate([
        (0, typeorm_1.Entity)('user')
    ], User);
    return User;
}());
exports.User = User;
