"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitch_clips = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const twitch_clips = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitchclips', {
        userid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        clipid: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.twitch_clips = twitch_clips;
