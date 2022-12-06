"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TemperatureСontrolLog = void 0;
var typeorm_1 = require("typeorm");
var Client_1 = require("./Client");
var ConnectionFacilityPlacesDepartmentApplianece_1 = require("./ConnectionFacilityPlacesDepartmentApplianece");
var TemperatureСontrolLog = /** @class */ (function () {
    function TemperatureСontrolLog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], TemperatureСontrolLog.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('integer')
    ], TemperatureСontrolLog.prototype, "temperature");
    __decorate([
        (0, typeorm_1.Column)('integer')
    ], TemperatureСontrolLog.prototype, "vlazhn");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], TemperatureСontrolLog.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], TemperatureСontrolLog.prototype, "time");
    __decorate([
        (0, typeorm_1.Column)('boolean')
    ], TemperatureСontrolLog.prototype, "sign");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ConnectionFacilityPlacesDepartmentApplianece_1.ConnectionFacilityPlacesDepartmentApplianece; }, function (ConnectionFacilityPlacesDepartmentApplianece) { return ConnectionFacilityPlacesDepartmentApplianece.id; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'appliancePlaceId'
        })
    ], TemperatureСontrolLog.prototype, "ConnectionFacilityPlacesDepartmentApplianece");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Client_1.User; }, function (user) { return user.TemperatureСontrolLog; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'user_id'
        })
    ], TemperatureСontrolLog.prototype, "user");
    TemperatureСontrolLog = __decorate([
        (0, typeorm_1.Entity)("TemperatureСontrolLog")
    ], TemperatureСontrolLog);
    return TemperatureСontrolLog;
}());
exports.TemperatureСontrolLog = TemperatureСontrolLog;
