"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trovo_clips = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const trovo_clips = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'trovoclips', {
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        clipid: { type: core_1.DataTypes.STRING, defaultValue: '', allowNull: false },
    });
    return model;
};
exports.trovo_clips = trovo_clips;
