"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail_ignore_subjects = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const mail_ignore_subjects = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'mail_ignore_subjects', {
        subject: { type: core_1.DataTypes.STRING, allowNull: false, unique: true },
    });
    return model;
};
exports.mail_ignore_subjects = mail_ignore_subjects;
