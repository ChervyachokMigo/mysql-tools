"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.beatmap_star = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const beatmap_star = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'beatmap_star', {
        md5: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true },
        local: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
        lazer: { type: sequelize_1.DataTypes.FLOAT, allowNull: false },
    });
    return model;
};
exports.beatmap_star = beatmap_star;
