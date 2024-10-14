"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtube_channel = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const youtube_channel = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['youtubeChannelsData', 'youtubechannel'], {
        channelid: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, unique: true, allowNull: false },
        channelname: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        icons_default: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        icons_medium: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        icons_high: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        creation_date: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        updoads_playlistid: { type: sequelize_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        tracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    });
    return model;
};
exports.youtube_channel = youtube_channel;
