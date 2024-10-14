"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_profile = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const osu_profile = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osuprofile', {
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        pp: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        rank: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        countryrank: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        acc: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        lastactive: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        online: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        followers: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        tracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: 1, allowNull: false },
        mainmode: { type: core_1.DataTypes.STRING, defaultValue: 'osu', allowNull: false },
        avatar: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.osu_profile = osu_profile;
