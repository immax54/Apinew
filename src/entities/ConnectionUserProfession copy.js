"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionUserProfession = void 0;
var typeorm_1 = require("typeorm");
var Client_1 = require("./Client");
var Professions_1 = require("./Professions");
var ConnectionUserProfession = /** @class */ (function () {
    function ConnectionUserProfession() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionUserProfession.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Professions_1.Professions; }, function (Professions) { return Professions.id; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'professionId'
        })
    ], ConnectionUserProfession.prototype, "Professions");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Client_1.User; }, function (User) { return User.id; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'userId'
        })
    ], ConnectionUserProfession.prototype, "User");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], ConnectionUserProfession.prototype, "created");
    ConnectionUserProfession = __decorate([
        (0, typeorm_1.Entity)("ConnectionUserProfession")
    ], ConnectionUserProfession);
    return ConnectionUserProfession;
}());
exports.ConnectionUserProfession = ConnectionUserProfession;
