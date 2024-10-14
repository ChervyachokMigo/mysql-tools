"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_replay_cache = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const osu_replay_cache = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['osureplaycache', 'replaycache'], {
        replay_md5: { type: core_1.DataTypes.STRING, unique: true, defaultValue: '', allowNull: false },
        replayJSONdata: { type: core_1.DataTypes.JSON, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.osu_replay_cache = osu_replay_cache;
