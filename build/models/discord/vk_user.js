"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vk_user = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const vk_user = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'vkuser', {
        tracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        online: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        name1: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        name2: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        lastactive: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        statustext: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
        followers: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        friends: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        friendsTracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });
    return model;
};
exports.vk_user = vk_user;
