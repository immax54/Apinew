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
var Objects_1 = require("./Objects");
var Places_1 = require("./Places");
var Typedepartment_1 = require("./Typedepartment");
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Appliance.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Appliance.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Appliance.prototype, "normalpoint");
    __decorate([
        (0, typeorm_1.Column)('integer')
    ], Appliance.prototype, "startnormalpoint");
    __decorate([
        (0, typeorm_1.Column)('integer')
    ], Appliance.prototype, "endnormalpoint");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Objects_1.Subject; }, function (Subject) { return Subject.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'subjectId'
        })
    ], Appliance.prototype, "Subject");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Places_1.Places; }, function (Place) { return Place.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'placeId'
        })
    ], Appliance.prototype, "Place");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Typedepartment_1.Department; }, function (Department) { return Department.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'departmentId'
        })
    ], Appliance.prototype, "Department");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Appliance.prototype, "created");
    Appliance = __decorate([
        (0, typeorm_1.Entity)("Appliance")
    ], Appliance);
    return Appliance;
}());
exports.Appliance = Appliance;
