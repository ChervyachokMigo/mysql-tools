"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vk_friend = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const vk_friend = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'vkfriend', {
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        friendid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    });
    return model;
};
exports.vk_friend = vk_friend;
