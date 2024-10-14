"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchchat_sended_notify = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const twitchchat_sended_notify = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitchchat_sended_notify', {
        channelname: { type: sequelize_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.twitchchat_sended_notify = twitchchat_sended_notify;
