"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_grade = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const user_grade = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osu_user_grade', {
        userid: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: 'user' },
        gamemode: { type: core_1.DataTypes.TINYINT, allowNull: false, unique: 'user' },
        score_mode: { type: core_1.DataTypes.TINYINT, allowNull: false, unique: 'user' },
        username: { type: core_1.DataTypes.STRING, allowNull: false, defaultValue: '' },
        F: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        D: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        C: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        B: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        A: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        S: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        X: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        SH: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        XH: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.user_grade = user_grade;
