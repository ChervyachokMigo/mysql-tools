"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_activity = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const osu_activity = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osuactivity', {
        activityid: { type: core_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        date: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        type: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    });
    return model;
};
exports.osu_activity = osu_activity;
