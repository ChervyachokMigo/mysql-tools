"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.steam_user = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const steam_user = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'steamuser', {
        tracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        steamid: { type: core_1.DataTypes.STRING, defaultValue: 0, allowNull: false },
        onlinestate: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        lastactive: { type: core_1.DataTypes.INTEGER },
        gameid: { type: core_1.DataTypes.INTEGER, defaultValue: 0 },
        gameinfo: { type: core_1.DataTypes.STRING, defaultValue: '' },
        url: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.steam_user = steam_user;
