"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_info = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_info = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_info', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        artist: { type: core_1.DataTypes.STRING, allowNull: false },
        title: { type: core_1.DataTypes.STRING, allowNull: false },
        creator: { type: core_1.DataTypes.STRING, allowNull: false },
        difficulty: { type: core_1.DataTypes.STRING, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.beatmap_info = beatmap_info;
