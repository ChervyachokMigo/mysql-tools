"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nibbers = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const nibbers = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'nibbers', {
        userid: { type: sequelize_1.DataTypes.BIGINT, unique: true, defaultValue: 0, allowNull: false },
        nibbers: { type: sequelize_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
    });
    return model;
};
exports.nibbers = nibbers;
