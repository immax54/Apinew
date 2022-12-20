"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Appliance = void 0;
var typeorm_1 = require("typeorm");
var ConnectionSubjectPlaces_1 = require("./ConnectionSubjectPlaces");
var TemperatureControl_1 = require("./TemperatureControl");
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Appliance.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Appliance.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Appliance.prototype, "normalpoint");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], Appliance.prototype, "startnormalpoint");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], Appliance.prototype, "endnormalpoint");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return ConnectionSubjectPlaces_1.ConnectionSubjectPlaces; }, function (ConnectionSubjectPlaces) { return ConnectionSubjectPlaces.id; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "placeId"
        })
    ], Appliance.prototype, "ConnectionSubjectPlaces");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return TemperatureControl_1.TemperatureControlLog; }, function (TemperatureControlLog) { return TemperatureControlLog.Appliance; }, {
            cascade: true
        })
    ], Appliance.prototype, "TemperatureControlLog");
    Appliance = __decorate([
        (0, typeorm_1.Entity)("Appliance")
    ], Appliance);
    return Appliance;
}());
exports.Appliance = Appliance;
