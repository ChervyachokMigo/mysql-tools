"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.score = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const score = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_score', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false },
        beatmap_id: { type: core_1.DataTypes.INTEGER, allowNull: false },
        id: { type: core_1.DataTypes.BIGINT, allowNull: false, unique: true, primaryKey: true },
        legacy_id: { type: core_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        userid: { type: core_1.DataTypes.INTEGER, allowNull: false },
        gamemode: { type: core_1.DataTypes.TINYINT, defaultValue: 0, allowNull: false },
        rank: { type: core_1.DataTypes.TINYINT, allowNull: false },
        accuracy: { type: core_1.DataTypes.FLOAT, allowNull: false },
        date: { type: core_1.DataTypes.STRING, allowNull: false },
        total_score: { type: core_1.DataTypes.INTEGER, allowNull: false },
        legacy_total_score: { type: core_1.DataTypes.BIGINT, defaultValue: BigInt(0), allowNull: false },
        max_combo: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp: { type: core_1.DataTypes.FLOAT, defaultValue: 0, allowNull: false },
        mods: { type: core_1.DataTypes.STRING, defaultValue: 'No Mods', allowNull: false },
        passed: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        ranked: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        best: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        count_meh: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_ok: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_great: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        count_miss: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        is_fc: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        legacy_is_fc: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.score = score;
