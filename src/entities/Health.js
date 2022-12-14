"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Health = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var ConnectionUserProfession_1 = require("./ConnectionUserProfession");
var Health = /** @class */ (function () {
    function Health() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Health.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ConnectionUserProfession_1.ConnectionUserProfession; }, function (ConnectionUserProfessions) { return ConnectionUserProfessions.Professions; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "userProfessionId"
        })
    ], Health.prototype, "ConnectionUserProfessions");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], Health.prototype, "okz");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], Health.prototype, "anginamark");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Health.prototype, "diagnos");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], Health.prototype, "passtowork");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Health.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], Health.prototype, "signSupervisor");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], Health.prototype, "signWorker");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (Users) { return Users.Healths; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "user_id"
        })
    ], Health.prototype, "Users");
    Health = __decorate([
        (0, typeorm_1.Entity)("Health")
    ], Health);
    return Health;
}());
exports.Health = Health;
