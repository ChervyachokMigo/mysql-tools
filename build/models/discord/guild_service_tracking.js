"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guild_service_tracking = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const guild_service_tracking = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'guildServicesTracking', {
        guildid: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        platformaction: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        key: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.guild_service_tracking = guild_service_tracking;
