"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TemperatureControlLog = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Devices_1 = require("./Devices");
var TemperatureControlLog = /** @class */ (function () {
    function TemperatureControlLog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TemperatureControlLog.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], TemperatureControlLog.prototype, "temperature");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], TemperatureControlLog.prototype, "vlazhn");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], TemperatureControlLog.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], TemperatureControlLog.prototype, "time");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], TemperatureControlLog.prototype, "sign");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Devices_1.Appliance; }, function (Appliances) { return Appliances.name; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "applianceId"
        })
    ], TemperatureControlLog.prototype, "Appliances");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.TemperatureСontrolLogs; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "user_id"
        })
    ], TemperatureControlLog.prototype, "user");
    TemperatureControlLog = __decorate([
        (0, typeorm_1.Entity)("TemperatureСontrolLog")
    ], TemperatureControlLog);
    return TemperatureControlLog;
}());
exports.TemperatureControlLog = TemperatureControlLog;
