"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorized_controls = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const authorized_controls = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'authorizedControls', {
        ip: { type: core_1.DataTypes.STRING, allowNull: false },
        token: { type: core_1.DataTypes.STRING, allowNull: false },
    });
    return model;
};
exports.authorized_controls = authorized_controls;
