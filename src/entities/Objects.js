"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Objects = void 0;
var typeorm_1 = require("typeorm");
var Objects = /** @class */ (function () {
    function Objects() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Objects.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Objects.prototype, "object");
    Objects = __decorate([
        (0, typeorm_1.Entity)("Objects")
    ], Objects);
    return Objects;
}());
exports.Objects = Objects;
