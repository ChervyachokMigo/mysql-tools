"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchchat_sended_notify = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const twitchchat_sended_notify = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitchchat_sended_notify', {
        channelname: { type: core_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.twitchchat_sended_notify = twitchchat_sended_notify;
