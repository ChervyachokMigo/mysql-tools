"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.custom_commands = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const custom_commands = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'custom_commands', {
        name: { type: core_1.DataTypes.STRING, allowNull: false, unique: true },
        channelname: { type: core_1.DataTypes.STRING, allowNull: false },
        text: { type: core_1.DataTypes.STRING, allowNull: false, defaultValue: '' },
        perm: { type: core_1.DataTypes.INTEGER, allowNull: false, defaultValue: 1 }
    });
    return model;
};
exports.custom_commands = custom_commands;
