"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_star = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const beatmap_star = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_star', {
        md5: { type: core_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        local: { type: core_1.DataTypes.FLOAT, allowNull: false },
        lazer: { type: core_1.DataTypes.FLOAT, allowNull: false },
    }, { noPrimaryKey: false });
    return model;
};
exports.beatmap_star = beatmap_star;
