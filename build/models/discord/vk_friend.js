"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vk_friend = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const vk_friend = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'vkfriend', {
        userid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        friendid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    });
    return model;
};
exports.vk_friend = vk_friend;
