"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vk_user = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const vk_user = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'vkuser', {
        tracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        userid: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        online: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        name1: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        name2: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        lastactive: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        statustext: { type: sequelize_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        followers: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        friends: { type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        friendsTracking: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });
    return model;
};
exports.vk_user = vk_user;
