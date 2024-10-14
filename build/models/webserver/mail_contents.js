"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail_contents = void 0;
const core_1 = require("@sequelize/core");
const defines_1 = require("../../defines");
const mail_contents = (connection) => {
    const model = (0, defines_1.define_model)(connection, 'mail_contents', {
        unique_key: { type: core_1.DataTypes.STRING, allowNull: false, unique: true },
        addressee: { type: core_1.DataTypes.STRING, allowNull: false },
        from: { type: core_1.DataTypes.STRING, allowNull: false },
        subject: { type: core_1.DataTypes.STRING, allowNull: false, defaultValue: '' },
        html: { type: core_1.DataTypes.TEXT({ length: "long" }), allowNull: true },
        text: { type: core_1.DataTypes.TEXT({ length: "long" }), allowNull: true },
        textAsHtml: { type: core_1.DataTypes.TEXT({ length: "long" }), allowNull: true },
        date: { type: core_1.DataTypes.DATE, allowNull: false },
        opened: { type: core_1.DataTypes.BOOLEAN, defaultValue: false }
    });
    return model;
};
exports.mail_contents = mail_contents;
