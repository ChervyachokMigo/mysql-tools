"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remind = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const remind = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'remind', {
        guildid: { type: core_1.DataTypes.STRING, unique: `remind`, allowNull: false },
        userid: { type: core_1.DataTypes.STRING, unique: `remind`, allowNull: false },
        text: { type: core_1.DataTypes.STRING, unique: `remind`, allowNull: false },
        time: { type: core_1.DataTypes.DATE, allowNull: false },
        timeMin: { type: core_1.DataTypes.INTEGER, defaultValue: 1 },
        infinity: { type: core_1.DataTypes.BOOLEAN, defaultValue: false },
    });
    return model;
};
exports.remind = remind;
