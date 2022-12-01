"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Places = void 0;
var typeorm_1 = require("typeorm");
var Objects_1 = require("./Objects");
var Places = /** @class */ (function () {
    function Places() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Places.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Places.prototype, "place");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Objects_1.Objects; }, function (Object) { return Object.object; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'objectId'
        })
    ], Places.prototype, "Object");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Places.prototype, "created");
    Places = __decorate([
        (0, typeorm_1.Entity)("Places")
    ], Places);
    return Places;
}());
exports.Places = Places;
