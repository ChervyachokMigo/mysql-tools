"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trovo_user = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const trovo_user = (connection) => {
    const model = (0, defines_1.define_model)(connection, ['trovodata', 'streamersTrovo'], {
        userid: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        username: { type: core_1.DataTypes.STRING, unique: true, allowNull: false },
        tracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        followers: { type: core_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        status: { type: core_1.DataTypes.STRING, defaultValue: `offline`, allowNull: false },
        title: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        cat: { type: core_1.DataTypes.STRING, defaultValue: ``, allowNull: false },
        followersTracking: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
        records: { type: core_1.DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    });
    return model;
};
exports.trovo_user = trovo_user;
