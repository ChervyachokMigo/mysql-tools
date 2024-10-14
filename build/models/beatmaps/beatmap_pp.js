"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_pp = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const beatmap_pp = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_beatmap_pp', {
        md5: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: 'action_key' },
        mods: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: 'action_key' },
        accuracy: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 100, allowNull: false, unique: 'action_key' },
        pp_total: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        pp_aim: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        pp_speed: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        pp_accuracy: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        stars: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        diff_aim: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        diff_speed: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        diff_sliders: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        speed_notes: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
        AR: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        OD: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    });
    return model;
};
exports.beatmap_pp = beatmap_pp;
