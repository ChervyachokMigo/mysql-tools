"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchchat = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const twitchchat = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'twitchchat', {
        username: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        tracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    });
    return model;
};
exports.twitchchat = twitchchat;
