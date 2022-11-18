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
var Client_1 = require("./Client");
var Health = /** @class */ (function () {
    function Health() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Health.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Health.prototype, "proffesion");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], Health.prototype, "okz");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], Health.prototype, "anginamark");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Health.prototype, "diagnos");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], Health.prototype, "passtowork");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Health.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], Health.prototype, "signSupervisor");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], Health.prototype, "signworker");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Client_1.User; }, function (User) { return User.Health; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'user_id'
        })
    ], Health.prototype, "User");
    Health = __decorate([
        (0, typeorm_1.Entity)("Health")
    ], Health);
    return Health;
}());
exports.Health = Health;
