"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const role = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['role', 'voiceroles_clear', 'voiceroles'], {
        guildid: { type: sequelize_1.DataTypes.STRING, unique: `guildrole`, allowNull: false },
        roleid: { type: sequelize_1.DataTypes.STRING, unique: `guildrole`, allowNull: false },
        price: { type: sequelize_1.DataTypes.INTEGER, defaultValue: -1 },
        chanid: { type: sequelize_1.DataTypes.STRING, defaultValue: '0' },
    });
    return model;
};
exports.role = role;
