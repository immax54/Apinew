"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionSubjectPlaces = void 0;
var typeorm_1 = require("typeorm");
var Objects_1 = require("./Objects");
var Places_1 = require("./Places");
var Department_1 = require("./Department");
var ConnectionSubjectPlaces = /** @class */ (function () {
    function ConnectionSubjectPlaces() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionSubjectPlaces.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Objects_1.Subject; }, function (Subject) { return Subject.name; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "subjectId"
        })
    ], ConnectionSubjectPlaces.prototype, "Subject");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Places_1.Places; }, function (Places) { return Places.name; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "placeId"
        })
    ], ConnectionSubjectPlaces.prototype, "Places");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Department_1.Department; }, function (Department) { return Department.name; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "departmetId"
        })
    ], ConnectionSubjectPlaces.prototype, "Department");
    ConnectionSubjectPlaces = __decorate([
        (0, typeorm_1.Entity)("ConnectionSubjectPlaces")
    ], ConnectionSubjectPlaces);
    return ConnectionSubjectPlaces;
}());
exports.ConnectionSubjectPlaces = ConnectionSubjectPlaces;
