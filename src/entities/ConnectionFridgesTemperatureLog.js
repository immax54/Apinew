"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionFridgesTemperatureLog = void 0;
var typeorm_1 = require("typeorm");
var Fridges_1 = require("./Fridges");
var Temperature_ontrol_1 = require("./Temperature\u0421ontrol");
var ConnectionFridgesTemperatureLog = /** @class */ (function () {
    function ConnectionFridgesTemperatureLog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionFridgesTemperatureLog.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Fridges_1.Fridges; }, function (Fridges) { return Fridges.appliance; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'FridgeId'
        })
    ], ConnectionFridgesTemperatureLog.prototype, "Fridges");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Temperature_ontrol_1.TemperatureСontrolLog; }, function (TemperatureСontrolLog) { return TemperatureСontrolLog.id; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'TemperatureLogId'
        })
    ], ConnectionFridgesTemperatureLog.prototype, "Temperature\u0421ontrolLog");
    ConnectionFridgesTemperatureLog = __decorate([
        (0, typeorm_1.Entity)("ConnectionFridgesTemperatureLog")
    ], ConnectionFridgesTemperatureLog);
    return ConnectionFridgesTemperatureLog;
}());
exports.ConnectionFridgesTemperatureLog = ConnectionFridgesTemperatureLog;
