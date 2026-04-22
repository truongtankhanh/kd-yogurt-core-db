"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusName = void 0;
var OrderStatusName;
(function (OrderStatusName) {
    OrderStatusName["PENDING"] = "cho_xac_nhan";
    OrderStatusName["CONFIRMED"] = "da_xac_nhan";
    OrderStatusName["PREPARING"] = "dang_chuan_bi";
    OrderStatusName["READY"] = "san_sang_giao";
    OrderStatusName["DELIVERING"] = "dang_giao_hang";
    OrderStatusName["COMPLETED"] = "hoan_thanh";
    OrderStatusName["CANCELLED"] = "da_huy";
})(OrderStatusName || (exports.OrderStatusName = OrderStatusName = {}));
