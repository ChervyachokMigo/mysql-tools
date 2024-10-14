"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const role = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['role', 'voiceroles_clear', 'voiceroles'], {
        guildid: { type: core_1.DataTypes.STRING, unique: `guildrole`, allowNull: false },
        roleid: { type: core_1.DataTypes.STRING, unique: `guildrole`, allowNull: false },
        price: { type: core_1.DataTypes.INTEGER, defaultValue: -1 },
        chanid: { type: core_1.DataTypes.STRING, defaultValue: '0' },
    });
    return model;
};
exports.role = role;
