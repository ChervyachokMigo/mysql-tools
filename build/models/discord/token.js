"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const token = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'token', {
        value: { type: core_1.DataTypes.TEXT, defaultValue: '', allowNull: false },
        platform: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        getdate: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        expires: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        type: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.token = token;
