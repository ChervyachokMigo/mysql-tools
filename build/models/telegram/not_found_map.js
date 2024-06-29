"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.not_found_map = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const not_found_map = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'not_found_map', {
        //const model = define_model(connection, 'bancho_not_founds', {
        beatmapset_id: { type: core_1.DataTypes.INTEGER },
    });
    return model;
};
exports.not_found_map = not_found_map;
