"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_id = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const beatmap_id = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_id', {
        md5: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        beatmap_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        beatmapset_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        gamemode: { type: sequelize_1.DataTypes.TINYINT.UNSIGNED, allowNull: false },
        ranked: { type: sequelize_1.DataTypes.TINYINT, allowNull: false },
    });
    return model;
};
exports.beatmap_id = beatmap_id;
