"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trovo_user = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const trovo_user = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['trovodata', 'streamersTrovo'], {
        userid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: sequelize_1.DataTypes.STRING, unique: true, allowNull: false },
        tracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        followers: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        status: { type: sequelize_1.DataTypes.STRING, defaultValue: `offline`, allowNull: false },
        title: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        cat: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        followersTracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        records: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });
    return model;
};
exports.trovo_user = trovo_user;
