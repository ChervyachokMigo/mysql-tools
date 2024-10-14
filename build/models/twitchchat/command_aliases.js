"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command_aliases = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const command_aliases = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'command_aliases', {
        id: { type: core_1.DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        name: { type: core_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.command_aliases = command_aliases;
