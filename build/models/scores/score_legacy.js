"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score_legacy = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const score_legacy = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_score_legacy', {
        md5: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        beatmap_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        id: { type: sequelize_1.DataTypes.BIGINT, allowNull: false, unique: true, primaryKey: true },
        userid: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        gamemode: { type: sequelize_1.DataTypes.TINYINT, defaultValue: 0, allowNull: false },
        rank: { type: sequelize_1.DataTypes.TINYINT, allowNull: false },
        date: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        total_score: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        max_combo: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        pp: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        mods: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        best: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        count_50: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_100: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_300: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_katu: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_geki: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_miss: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        is_fc: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });
    return model;
};
exports.score_legacy = score_legacy;
