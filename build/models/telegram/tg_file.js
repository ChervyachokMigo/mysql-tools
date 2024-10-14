"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tg_file = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const tg_file = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'tg_file', {
        beatmapset_id: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        message_id: { type: core_1.DataTypes.INTEGER, allowNull: true }
    }, { noPrimaryKey: false });
    return model;
};
exports.tg_file = tg_file;
