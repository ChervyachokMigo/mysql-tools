"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saved_control_commands = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const saved_control_commands = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'savedControlCommands', {
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        text: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        args: { type: sequelize_1.DataTypes.STRING, defaultValue: '' },
    });
    return model;
};
exports.saved_control_commands = saved_control_commands;
