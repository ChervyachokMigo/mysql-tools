"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.channel = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const channel = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['botchannel', 'channels_clear'], {
        guildid: { type: core_1.DataTypes.STRING, unique: `message`, allowNull: false },
        channeltype: { type: core_1.DataTypes.STRING, unique: `message`, allowNull: false },
        channelid: { type: core_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.channel = channel;
