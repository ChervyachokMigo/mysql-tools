"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_profile = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const osu_profile = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osuprofile', {
        userid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        pp: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        rank: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        countryrank: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        acc: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        lastactive: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        online: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        followers: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        tracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: 1, allowNull: false },
        mainmode: { type: sequelize_1.DataTypes.STRING, defaultValue: 'osu', allowNull: false },
        avatar: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.osu_profile = osu_profile;
