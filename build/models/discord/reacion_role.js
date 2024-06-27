"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reacion_role = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const reacion_role = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'reactionrole', {
        guildid: { type: core_1.DataTypes.STRING, unique: `message`, allowNull: false },
        messageid: { type: core_1.DataTypes.STRING, unique: `message`, allowNull: false },
        emoji: { type: core_1.DataTypes.STRING, unique: `message`, allowNull: false },
        emojitype: { type: core_1.DataTypes.STRING, allowNull: false },
        roleid: { type: core_1.DataTypes.STRING, allowNull: false },
    });
    return model;
};
exports.reacion_role = reacion_role;
