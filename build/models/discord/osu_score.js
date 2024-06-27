"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_score = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const osu_score = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osuscore', {
        scoreid: { type: core_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        date: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        gamemode: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        mapsetid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        mapid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score300: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score100: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score50: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score0: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        artist: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        title: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        diff: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        pp: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        acc: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        rank: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        mods: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.osu_score = osu_score;
