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
var Brack_1 = require("./Brack");
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
        (0, typeorm_1.Column)('text')
    ], User.prototype, "additional");
    __decorate([
        (0, typeorm_1.Column)('date')
    ], User.prototype, "created");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Brack_1.Bracklog; }, function (Bracklog) { return Bracklog.user; })
    ], User.prototype, "Bracklog");
    User = __decorate([
        (0, typeorm_1.Entity)('user')
    ], User);
    return User;
}());
exports.User = User;
