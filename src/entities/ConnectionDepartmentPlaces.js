"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionDepartmentPlaces = void 0;
var typeorm_1 = require("typeorm");
var Objects_copy_1 = require("./Objects copy");
var Places_1 = require("./Places");
var ConnectionDepartmentPlaces = /** @class */ (function () {
    function ConnectionDepartmentPlaces() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionDepartmentPlaces.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Places_1.Places; }, function (Place) { return Place.place; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'placeId'
        })
    ], ConnectionDepartmentPlaces.prototype, "Place");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Objects_copy_1.Typedepartment; }, function (Typedepartment) { return Typedepartment.department; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'departmentId'
        })
    ], ConnectionDepartmentPlaces.prototype, "Typedepartment");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], ConnectionDepartmentPlaces.prototype, "created");
    ConnectionDepartmentPlaces = __decorate([
        (0, typeorm_1.Entity)("ConnectionDepartmentPlaces")
    ], ConnectionDepartmentPlaces);
    return ConnectionDepartmentPlaces;
}());
exports.ConnectionDepartmentPlaces = ConnectionDepartmentPlaces;
