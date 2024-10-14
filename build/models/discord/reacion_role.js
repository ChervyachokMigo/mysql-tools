"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reacion_role = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const reacion_role = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'reactionrole', {
        guildid: { type: sequelize_1.DataTypes.STRING, unique: `message`, allowNull: false },
        messageid: { type: sequelize_1.DataTypes.STRING, unique: `message`, allowNull: false },
        emoji: { type: sequelize_1.DataTypes.STRING, unique: `message`, allowNull: false },
        emojitype: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        roleid: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    });
    return model;
};
exports.reacion_role = reacion_role;
