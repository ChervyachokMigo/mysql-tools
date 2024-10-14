"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saved_control_commands = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const saved_control_commands = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'savedControlCommands', {
        name: { type: core_1.DataTypes.STRING, allowNull: false },
        text: { type: core_1.DataTypes.STRING, allowNull: false },
        args: { type: core_1.DataTypes.STRING, defaultValue: '' },
    });
    return model;
};
exports.saved_control_commands = saved_control_commands;
