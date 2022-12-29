"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NotificationsTempcontrolLog = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var TemperatureControl_1 = require("./TemperatureControl");
var NotificationsTempcontrolLog = /** @class */ (function () {
    function NotificationsTempcontrolLog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], NotificationsTempcontrolLog.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], NotificationsTempcontrolLog.prototype, "statusOfSign");
    __decorate([
        (0, typeorm_1.Column)("boolean")
    ], NotificationsTempcontrolLog.prototype, "statusNotification");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return TemperatureControl_1.TemperatureControlLog; }, function (TemperatureControlLogs) { return TemperatureControlLogs.id; }, {
            cascade: true
        }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "TemperatureСontrolLogId"
        })
    ], NotificationsTempcontrolLog.prototype, "TemperatureControlLogs");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (Users) { return Users.id; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "userId"
        })
    ], NotificationsTempcontrolLog.prototype, "Users");
    NotificationsTempcontrolLog = __decorate([
        (0, typeorm_1.Entity)("NotificationsTempcontrolLog")
    ], NotificationsTempcontrolLog);
    return NotificationsTempcontrolLog;
}());
exports.NotificationsTempcontrolLog = NotificationsTempcontrolLog;
