"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_info = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const beatmap_info = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_info', {
        md5: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        artist: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        title: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        creator: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        difficulty: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    });
    return model;
};
exports.beatmap_info = beatmap_info;
