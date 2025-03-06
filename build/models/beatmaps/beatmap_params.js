"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_params = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_params = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_params', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        bpm_min: { type: core_1.DataTypes.INTEGER, allowNull: false },
        bpm_max: { type: core_1.DataTypes.INTEGER, allowNull: false },
        bpm_avg: { type: core_1.DataTypes.INTEGER, allowNull: false },
        total_time: { type: core_1.DataTypes.INTEGER, allowNull: false },
        drain_time: { type: core_1.DataTypes.INTEGER, allowNull: false },
        break_time: { type: core_1.DataTypes.INTEGER, allowNull: false },
        circles_time: { type: core_1.DataTypes.INTEGER, allowNull: false },
        sliders_time: { type: core_1.DataTypes.INTEGER, allowNull: false },
        objects_time: { type: core_1.DataTypes.INTEGER, allowNull: false },
        hit_count: { type: core_1.DataTypes.INTEGER, allowNull: false },
        slider_count: { type: core_1.DataTypes.INTEGER, allowNull: false },
        spinner_count: { type: core_1.DataTypes.INTEGER, allowNull: false },
        stream_difficulty: { type: core_1.DataTypes.FLOAT, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.beatmap_params = beatmap_params;
