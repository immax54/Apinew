"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Subject = void 0;
var typeorm_1 = require("typeorm");
var ConnectionSubjectPlaces_1 = require("./ConnectionSubjectPlaces");
var Subject = /** @class */ (function () {
    function Subject() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Subject.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Subject.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Subject.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Subject.prototype, "type");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConnectionSubjectPlaces_1.ConnectionSubjectPlaces; }, function (ConnectionSubjectPlaces) { return ConnectionSubjectPlaces.Subject; }, {
            cascade: true
        })
    ], Subject.prototype, "ConnectionSubjectPlaces");
    Subject = __decorate([
        (0, typeorm_1.Entity)("subject")
    ], Subject);
    return Subject;
}());
exports.Subject = Subject;
