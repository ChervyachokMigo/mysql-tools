"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const token = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'token', {
        value: { type: sequelize_1.DataTypes.TEXT, defaultValue: '', allowNull: false },
        platform: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        getdate: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        expires: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        type: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.token = token;
