"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const score = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_score', {
        md5: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        beatmap_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        id: { type: sequelize_1.DataTypes.BIGINT, allowNull: false, unique: true, primaryKey: true },
        legacy_id: { type: sequelize_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        userid: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        gamemode: { type: sequelize_1.DataTypes.TINYINT, defaultValue: 0, allowNull: false },
        rank: { type: sequelize_1.DataTypes.TINYINT, allowNull: false },
        accuracy: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        date: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        total_score: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        legacy_total_score: { type: sequelize_1.DataTypes.BIGINT, defaultValue: BigInt(0), allowNull: false },
        max_combo: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        pp: { type: sequelize_1.DataTypes.FLOAT, defaultValue: 0, allowNull: false },
        mods: { type: sequelize_1.DataTypes.STRING, defaultValue: 'No Mods', allowNull: false },
        passed: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        ranked: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        best: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        count_meh: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_ok: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_great: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_miss: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        is_fc: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        legacy_is_fc: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });
    return model;
};
exports.score = score;
