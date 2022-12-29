"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionUserRole = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Roles_1 = require("./Roles");
var ConnectionUserRole = /** @class */ (function () {
    function ConnectionUserRole() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionUserRole.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Roles_1.Roles; }, function (Role) { return Role.id; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "roleId"
        })
    ], ConnectionUserRole.prototype, "Role");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (Users) { return Users.id; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "userId"
        })
    ], ConnectionUserRole.prototype, "Users");
    ConnectionUserRole = __decorate([
        (0, typeorm_1.Entity)("ConnectionUserRole")
    ], ConnectionUserRole);
    return ConnectionUserRole;
}());
exports.ConnectionUserRole = ConnectionUserRole;
