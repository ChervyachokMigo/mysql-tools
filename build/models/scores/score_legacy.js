"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score_legacy = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const score_legacy = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_score_legacy', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false },
        beatmap_id: { type: core_1.DataTypes.INTEGER, allowNull: false },
        id: { type: core_1.DataTypes.BIGINT, allowNull: false, unique: true, primaryKey: true },
        userid: { type: core_1.DataTypes.INTEGER, allowNull: false },
        gamemode: { type: core_1.DataTypes.TINYINT, defaultValue: 0, allowNull: false },
        rank: { type: core_1.DataTypes.TINYINT, allowNull: false },
        date: { type: core_1.DataTypes.STRING, allowNull: false },
        total_score: { type: core_1.DataTypes.INTEGER, allowNull: false },
        max_combo: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp: { type: core_1.DataTypes.FLOAT, allowNull: false },
        mods: { type: core_1.DataTypes.STRING, allowNull: false },
        best: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        count_50: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_100: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_300: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_katu: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_geki: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_miss: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        is_fc: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.score_legacy = score_legacy;
