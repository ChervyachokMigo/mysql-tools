"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitch_osu_binds = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const twitch_osu_binds = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitch_osu_binds', {
        twitch_id: { type: core_1.DataTypes.STRING, allowNull: false },
        twitch_name: { type: core_1.DataTypes.STRING, allowNull: false },
        osu_id: { type: core_1.DataTypes.INTEGER, allowNull: false },
        osu_name: { type: core_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.twitch_osu_binds = twitch_osu_binds;
