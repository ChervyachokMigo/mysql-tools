"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channel = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const channel = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['botchannel', 'channels_clear'], {
        guildid: { type: sequelize_1.DataTypes.STRING, unique: `message`, allowNull: false },
        channeltype: { type: sequelize_1.DataTypes.STRING, unique: `message`, allowNull: false },
        channelid: { type: sequelize_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.channel = channel;
