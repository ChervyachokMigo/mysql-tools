"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_stats = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const user_stats = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'user_stats', {
        userid: { type: core_1.DataTypes.STRING, allowNull: false, unique: true, primaryKey: true },
        username: { type: core_1.DataTypes.STRING, allowNull: false },
        usercolor: { type: core_1.DataTypes.STRING, allowNull: false },
        messagescount: { type: core_1.DataTypes.INTEGER, defaultValue: 0 },
        charscount: { type: core_1.DataTypes.INTEGER, defaultValue: 0 },
        joinscount: { type: core_1.DataTypes.INTEGER, defaultValue: 0 },
    });
    return model;
};
exports.user_stats = user_stats;
