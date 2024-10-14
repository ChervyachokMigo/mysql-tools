"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sended_map = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const sended_map = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'sended_map', {
        beatmapset_id: { type: sequelize_1.DataTypes.INTEGER },
    });
    return model;
};
exports.sended_map = sended_map;
