"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.osu_hunter_tracking = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const osu_hunter_tracking = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'osuHunterTrackingUser', {
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        lastUpdated: { type: core_1.DataTypes.DATEONLY, allowNull: false },
    });
    return model;
};
exports.osu_hunter_tracking = osu_hunter_tracking;
