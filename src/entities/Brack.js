"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Bracklog = void 0;
var typeorm_1 = require("typeorm");
var User_1 = require("./User");
var Dishes_1 = require("./Dishes");
var Bracklog = /** @class */ (function () {
    function Bracklog() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Bracklog.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Dishes_1.Dishes; }, function (dish) { return dish.dish; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "dishId"
        })
    ], Bracklog.prototype, "dish");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], Bracklog.prototype, "timespend");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], Bracklog.prototype, "rating");
    __decorate([
        (0, typeorm_1.Column)("integer")
    ], Bracklog.prototype, "serveTime");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Bracklog.prototype, "note");
    __decorate([
        (0, typeorm_1.Column)("text")
    ], Bracklog.prototype, "date");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (user) { return user.Bracklogs; }),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "user_id"
        })
    ], Bracklog.prototype, "user");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return User_1.User; }, function (userdone) { return userdone.Bracklogs; } // date + id_usera
        ),
        (0, typeorm_1.Column)("integer"),
        (0, typeorm_1.JoinColumn)({
            name: "userdone"
        })
    ], Bracklog.prototype, "userdone");
    Bracklog = __decorate([
        (0, typeorm_1.Entity)("BrackLog")
    ], Bracklog);
    return Bracklog;
}());
exports.Bracklog = Bracklog;
