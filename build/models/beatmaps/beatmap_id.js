"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_id = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_id = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_id', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        beatmap_id: { type: core_1.DataTypes.INTEGER, allowNull: false },
        beatmapset_id: { type: core_1.DataTypes.INTEGER, allowNull: false },
        gamemode: { type: core_1.DataTypes.TINYINT.UNSIGNED, allowNull: false },
        ranked: { type: core_1.DataTypes.TINYINT, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.beatmap_id = beatmap_id;
