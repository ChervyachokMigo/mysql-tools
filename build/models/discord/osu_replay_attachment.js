"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_replay_attachment = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const osu_replay_attachment = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['osureplayattachment', 'replayattachment'], {
        imageid: { type: core_1.DataTypes.BIGINT, unique: true, defaultValue: 0, allowNull: false },
        userid: { type: core_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        beatmap_md5: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        replay_md5: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        time: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        zoom: { type: core_1.DataTypes.INTEGER, defaultValue: 400, allowNull: false },
    });
    return model;
};
exports.osu_replay_attachment = osu_replay_attachment;
