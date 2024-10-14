"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remind = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const remind = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'remind', {
        guildid: { type: sequelize_1.DataTypes.STRING, unique: `remind`, allowNull: false },
        userid: { type: sequelize_1.DataTypes.STRING, unique: `remind`, allowNull: false },
        text: { type: sequelize_1.DataTypes.STRING, unique: `remind`, allowNull: false },
        time: { type: sequelize_1.DataTypes.DATE, allowNull: false },
        timeMin: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
        infinity: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false },
    });
    return model;
};
exports.remind = remind;
