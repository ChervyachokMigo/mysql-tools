"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const user = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['user', 'daily'], {
        guildid: { type: core_1.DataTypes.STRING, unique: `guilduser`, allowNull: false },
        userid: { type: core_1.DataTypes.STRING, unique: `guilduser`, allowNull: false },
        restricted: { type: core_1.DataTypes.BOOLEAN, defaultValue: false },
        coins: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        lastdaily: { type: core_1.DataTypes.DATE, allowNull: false },
        dailynotified: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    });
    return model;
};
exports.user = user;
