"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_md5 = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_md5 = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmaps_md5', {
        id: { type: core_1.DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true, index: true },
        hash: { type: core_1.DataTypes.STRING(32), allowNull: false, unique: true, index: true },
    });
    return model;
};
exports.beatmap_md5 = beatmap_md5;
