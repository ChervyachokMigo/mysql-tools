"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.steam_user = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const steam_user = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'steamuser', {
        tracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        steamid: { type: sequelize_1.DataTypes.STRING, defaultValue: 0, allowNull: false },
        onlinestate: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        lastactive: { type: sequelize_1.DataTypes.INTEGER },
        gameid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0 },
        gameinfo: { type: sequelize_1.DataTypes.STRING, defaultValue: '' },
        url: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.steam_user = steam_user;
