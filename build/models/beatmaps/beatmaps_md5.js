"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_md5 = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const beatmap_md5 = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmaps_md5', {
        id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true },
        hash: { type: sequelize_1.DataTypes.STRING(32), allowNull: false, unique: true },
    });
    return model;
};
exports.beatmap_md5 = beatmap_md5;
