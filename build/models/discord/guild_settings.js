"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guild_settings = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const guild_settings = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'guildSettings', {
        guildid: { type: core_1.DataTypes.BIGINT, defaultValue: 0, allowNull: false },
        settingname: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        value: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.guild_settings = guild_settings;
