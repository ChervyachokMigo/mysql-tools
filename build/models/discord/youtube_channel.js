"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtube_channel = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const youtube_channel = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['youtubeChannelsData', 'youtubechannel'], {
        channelid: { type: core_1.DataTypes.STRING, defaultValue: ``, unique: true, allowNull: false },
        channelname: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        icons_default: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        icons_medium: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        icons_high: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        creation_date: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        updoads_playlistid: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        tracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    });
    return model;
};
exports.youtube_channel = youtube_channel;
