"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionFacilityPlacesDepartmentApplianece = void 0;
var typeorm_1 = require("typeorm");
var Typedepartment_1 = require("./Typedepartment");
var Places_1 = require("./Places");
var Objects_1 = require("./Objects");
var Devices_1 = require("./Devices");
var ConnectionFacilityPlacesDepartmentApplianece = /** @class */ (function () {
    function ConnectionFacilityPlacesDepartmentApplianece() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionFacilityPlacesDepartmentApplianece.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Objects_1.Subject; }, function (Subject) { return Subject.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'subjectId'
        })
    ], ConnectionFacilityPlacesDepartmentApplianece.prototype, "Subject");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Places_1.Places; }, function (Place) { return Place.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'placeId'
        })
    ], ConnectionFacilityPlacesDepartmentApplianece.prototype, "Place");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Typedepartment_1.Typedepartment; }, function (Typedepartment) { return Typedepartment.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'departmentId'
        })
    ], ConnectionFacilityPlacesDepartmentApplianece.prototype, "Typedepartment");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Devices_1.Appliances; }, function (Appliances) { return Appliances.name; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'applianceId'
        })
    ], ConnectionFacilityPlacesDepartmentApplianece.prototype, "Appliances");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], ConnectionFacilityPlacesDepartmentApplianece.prototype, "created");
    ConnectionFacilityPlacesDepartmentApplianece = __decorate([
        (0, typeorm_1.Entity)("ConnectionFacilityPlacesDepartmentApplianece")
    ], ConnectionFacilityPlacesDepartmentApplianece);
    return ConnectionFacilityPlacesDepartmentApplianece;
}());
exports.ConnectionFacilityPlacesDepartmentApplianece = ConnectionFacilityPlacesDepartmentApplianece;
