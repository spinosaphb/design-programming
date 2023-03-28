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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZeroDivisionError = exports.NotEnoughBatteryError = exports.Calculator = void 0;
var NotEnoughBatteryError = /** @class */ (function (_super) {
    __extends(NotEnoughBatteryError, _super);
    function NotEnoughBatteryError() {
        return _super.call(this, "Not enough battery") || this;
    }
    return NotEnoughBatteryError;
}(Error));
exports.NotEnoughBatteryError = NotEnoughBatteryError;
var ZeroDivisionError = /** @class */ (function (_super) {
    __extends(ZeroDivisionError, _super);
    function ZeroDivisionError() {
        return _super.call(this, "Zero division") || this;
    }
    return ZeroDivisionError;
}(Error));
exports.ZeroDivisionError = ZeroDivisionError;
var Calculator = /** @class */ (function () {
    function Calculator(batteryMax) {
        if (batteryMax === void 0) { batteryMax = 100; }
        this.batteryMax = batteryMax;
        this.battery = 0;
        this.display = 0;
    }
    Calculator.prototype.chargeBattery = function (value) {
        this.battery = Math.min(this.battery + value, this.batteryMax);
    };
    Calculator.prototype.sum = function (n1, n2) {
        try {
            this.useBattery();
            this.display = n1 + n2;
        }
        catch (error) {
            if (error instanceof NotEnoughBatteryError) {
                Calculator.showError(error);
            }
            else
                throw error;
        }
    };
    Calculator.prototype.division = function (n1, n2) {
        try {
            this.useBattery();
            if (n2 == 0)
                throw new ZeroDivisionError();
            this.display = n1 / n2;
        }
        catch (error) {
            if (error instanceof NotEnoughBatteryError || error instanceof ZeroDivisionError) {
                Calculator.showError(error);
            }
            else
                throw error;
        }
    };
    Calculator.prototype.useBattery = function () {
        if ((this.battery - 1 < 0))
            throw new NotEnoughBatteryError();
        this.battery--;
        return true;
    };
    Calculator.prototype.toString = function () {
        return "display = ".concat(this.display.toFixed(2), ", battery = ").concat(this.battery);
    };
    Calculator.showError = function (error) {
        console.log("".concat(Calculator.OPERATION_FAIL_MESSAGE, ", ").concat(error.message));
    };
    Calculator.OPERATION_FAIL_MESSAGE = ("It was not possible to carry out the operation");
    return Calculator;
}());
exports.Calculator = Calculator;
