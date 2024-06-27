"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchchat_ignores = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const twitchchat_ignores = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitchchat_ignores', {
        channelname: { type: core_1.DataTypes.STRING, allowNull: false }
    });
    return model;
};
exports.twitchchat_ignores = twitchchat_ignores;
