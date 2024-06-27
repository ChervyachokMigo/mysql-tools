"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitch_banned = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const twitch_banned = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitch_banned', {
        channelname: { type: core_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.twitch_banned = twitch_banned;
