"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const user = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['user', 'daily'], {
        guildid: { type: sequelize_1.DataTypes.STRING, unique: `guilduser`, allowNull: false },
        userid: { type: sequelize_1.DataTypes.STRING, unique: `guilduser`, allowNull: false },
        restricted: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
        coins: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        lastdaily: { type: sequelize_1.DataTypes.DATE, allowNull: false },
        dailynotified: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    });
    return model;
};
exports.user = user;
