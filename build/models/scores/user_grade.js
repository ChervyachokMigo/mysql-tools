"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_grade = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const user_grade = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_user_grade', {
        userid: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: 'user' },
        gamemode: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, unique: 'user' },
        score_mode: { type: sequelize_1.DataTypes.TINYINT, allowNull: false, unique: 'user' },
        username: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: '' },
        F: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        D: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        C: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        B: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        A: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        S: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        X: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        SH: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        XH: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    });
    return model;
};
exports.user_grade = user_grade;
