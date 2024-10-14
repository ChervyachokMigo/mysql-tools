"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_score = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const osu_score = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osuscore', {
        scoreid: { type: sequelize_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        date: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        userid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        gamemode: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        mapsetid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        mapid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score300: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score100: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score50: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        score0: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        artist: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        title: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        diff: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        pp: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        acc: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        rank: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        mods: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.osu_score = osu_score;
