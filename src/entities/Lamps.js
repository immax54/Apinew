"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Lamps = void 0;
var typeorm_1 = require("typeorm");
var ConnectionLampsTemperatureLog_1 = require("./ConnectionLampsTemperatureLog");
var Devices_1 = require("./Devices");
var Lamps = /** @class */ (function (_super) {
    __extends(Lamps, _super);
    function Lamps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Lamps.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return ConnectionLampsTemperatureLog_1.ConnectionLampsTemperatureLog; }, function (ConnectionLampsTemperatureLog) { return ConnectionLampsTemperatureLog.Lamp; }, {
            cascade: true
        })
    ], Lamps.prototype, "ConnectionLampsTemperatureLog");
    Lamps = __decorate([
        (0, typeorm_1.Entity)("Lamps")
    ], Lamps);
    return Lamps;
}(Devices_1.Appliances));
exports.Lamps = Lamps;
