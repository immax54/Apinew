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
var TemperatureControl_1 = require("./TemperatureControl");
var ConnectionUserRole_1 = require("./ConnectionUserRole");
var ConnectionUserProfession_1 = require("./ConnectionUserProfession");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], User.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], User.prototype, "surname");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], User.prototype, "otch");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], User.prototype, "deleted");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], User.prototype, "banned");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Brack_1.Bracklog; }, function (Bracklogs) { return Bracklogs.user; }, {
            cascade: true
        })
    ], User.prototype, "Bracklogs");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConnectionUserProfession_1.ConnectionUserProfession; }, function (ConnectionUserProfessions) { return ConnectionUserProfessions.Users; }, {
            cascade: true
        })
    ], User.prototype, "ConnectionUserProfessions");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Accounts_1.Account; }, function (Accounts) { return Accounts.user; }, {
            cascade: true
        })
    ], User.prototype, "Accounts");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConnectionUserRole_1.ConnectionUserRole; }, function (ConnectionUserRoles) { return ConnectionUserRoles.Users; }, {
            cascade: true
        })
    ], User.prototype, "ConnectionUserRoles");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Health_1.Health; }, function (Healths) { return Healths.Users; }, {
            cascade: true
        })
    ], User.prototype, "Healths");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return TemperatureControl_1.TemperatureControlLog; }, function (TemperatureControlLogs) { return TemperatureControlLogs.user; }, {
            cascade: true
        })
    ], User.prototype, "Temperature\u0421ontrolLogs");
    User = __decorate([
        (0, typeorm_1.Entity)("user")
    ], User);
    return User;
}());
exports.User = User;
