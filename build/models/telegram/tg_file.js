"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tg_file = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const tg_file = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'tg_file', {
        beatmapset_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        message_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: true }
    });
    return model;
};
exports.tg_file = tg_file;
