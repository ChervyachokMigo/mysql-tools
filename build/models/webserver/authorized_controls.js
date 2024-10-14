"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorized_controls = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const authorized_controls = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'authorizedControls', {
        ip: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        token: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    });
    return model;
};
exports.authorized_controls = authorized_controls;
