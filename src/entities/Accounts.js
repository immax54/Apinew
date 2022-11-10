"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Account = void 0;
var typeorm_1 = require("typeorm");
var Client_1 = require("./Client");
var Account = /** @class */ (function () {
    function Account() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Account.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Account.prototype, "login");
    __decorate([
        (0, typeorm_1.Column)('text')
    ], Account.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)('date')
    ], Account.prototype, "created");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Client_1.User; }, function (user) { return user.Account; }),
        (0, typeorm_1.JoinColumn)({
            name: 'user_id'
        })
    ], Account.prototype, "user");
    Account = __decorate([
        (0, typeorm_1.Entity)('accounts')
    ], Account);
    return Account;
}());
exports.Account = Account;
