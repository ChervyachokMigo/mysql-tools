"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail_contents = void 0;
const sequelize_1 = require("sequelize");
const defines_1 = require("../../defines");
const mail_contents = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'mail_contents', {
        unique_key: { type: sequelize_1.DataTypes.STRING, allowNull: false, unique: true },
        addressee: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        from: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        subject: { type: sequelize_1.DataTypes.STRING, allowNull: false, defaultValue: '' },
        html: { type: sequelize_1.DataTypes.TEXT('long'), allowNull: true },
        text: { type: sequelize_1.DataTypes.TEXT('long'), allowNull: true },
        textAsHtml: { type: sequelize_1.DataTypes.TEXT('long'), allowNull: true },
        date: { type: sequelize_1.DataTypes.DATE, allowNull: false },
        opened: { type: sequelize_1.DataTypes.BOOLEAN, defaultValue: false }
    });
    return model;
};
exports.mail_contents = mail_contents;
