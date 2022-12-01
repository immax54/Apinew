"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ConnectionCategoryDish = void 0;
var typeorm_1 = require("typeorm");
var Categories_1 = require("./Categories");
var Dishes_1 = require("./Dishes");
var ConnectionCategoryDish = /** @class */ (function () {
    function ConnectionCategoryDish() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ConnectionCategoryDish.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Categories_1.Categories; }, function (Category) { return Category.id; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'categoryId'
        })
    ], ConnectionCategoryDish.prototype, "Category");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Dishes_1.Dishes; }, function (Dish) { return Dish.id; }),
        (0, typeorm_1.Column)('integer'),
        (0, typeorm_1.JoinColumn)({
            name: 'dishId'
        })
    ], ConnectionCategoryDish.prototype, "Dish");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], ConnectionCategoryDish.prototype, "created");
    ConnectionCategoryDish = __decorate([
        (0, typeorm_1.Entity)("ConnectionCategoryDish")
    ], ConnectionCategoryDish);
    return ConnectionCategoryDish;
}());
exports.ConnectionCategoryDish = ConnectionCategoryDish;
