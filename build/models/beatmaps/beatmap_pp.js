"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_pp = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_pp = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_beatmap_pp', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: 'action_key' },
        mods: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: 'action_key' },
        accuracy: { type: core_1.DataTypes.INTEGER, defaultValue: 100, allowNull: false, unique: 'action_key' },
        pp_total: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp_aim: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp_speed: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp_accuracy: { type: core_1.DataTypes.INTEGER, allowNull: false },
        stars: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_aim: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_speed: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_sliders: { type: core_1.DataTypes.FLOAT, allowNull: false },
        speed_notes: { type: core_1.DataTypes.INTEGER, allowNull: false },
        AR: { type: core_1.DataTypes.FLOAT, allowNull: false },
        OD: { type: core_1.DataTypes.FLOAT, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.beatmap_pp = beatmap_pp;
