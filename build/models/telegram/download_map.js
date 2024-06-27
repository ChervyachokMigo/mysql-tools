"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.download_map = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const download_map = (connection) => {
    //const model = define_model(connection, 'download_map', {
    const model = (0, defines_1.define_model)(connection, 'maps_to_downloads', {
        beatmapset_id: { type: core_1.DataTypes.INTEGER },
    });
    return model;
};
exports.download_map = download_map;
