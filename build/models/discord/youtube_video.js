"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.youtube_video = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const youtube_video = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['youtubeVideosData', 'youtubevideos'], {
        videoid: { type: core_1.DataTypes.STRING, defaultValue: '0', unique: true, allowNull: false },
        videotitle: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        preview_default: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        preview_medium: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        preview_high: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        date: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    });
    return model;
};
exports.youtube_video = youtube_video;
