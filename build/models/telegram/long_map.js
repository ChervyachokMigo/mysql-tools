"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.long_map = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const long_map = (connection) => {
    //const model = define_model(connection, 'long_map', {
    const model = (0, defines_1.define_model)(connection, 'map_too_longs', {
        beatmapset_id: { type: core_1.DataTypes.INTEGER },
    });
    return model;
};
exports.long_map = long_map;
