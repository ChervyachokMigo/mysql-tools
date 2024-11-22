"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_pp_taiko = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_pp_taiko = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'taiko_beatmap_pp', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: 'action_key' },
        mods: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: 'action_key' },
        accuracy: { type: core_1.DataTypes.INTEGER, defaultValue: 100, allowNull: false, unique: 'action_key' },
        pp_total: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp_difficulty: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp_ur: { type: core_1.DataTypes.INTEGER, allowNull: false },
        pp_accuracy: { type: core_1.DataTypes.INTEGER, allowNull: false },
        stars: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_mono_stamina: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_stamina: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_rhythm: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_colour: { type: core_1.DataTypes.FLOAT, allowNull: false },
        diff_peak: { type: core_1.DataTypes.FLOAT, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.beatmap_pp_taiko = beatmap_pp_taiko;
