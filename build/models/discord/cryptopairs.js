"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptopairs = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const cryptopairs = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'cryptopairs', {
        first: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        second: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        value: { type: sequelize_1.DataTypes.DOUBLE, defaultValue: 0.0 },
        value_change: { type: sequelize_1.DataTypes.DOUBLE, defaultValue: 0.0 },
        is_online: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
        last_update: { type: sequelize_1.DataTypes.DATE, defaultValue: new Date(0), allowNull: false }
    });
    return model;
};
exports.cryptopairs = cryptopairs;
