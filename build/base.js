"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQL_SAVE = exports.MYSQL_DELETE = exports.MYSQL_UPDATE = exports.MYSQL_GET_ALL = exports.MYSQL_GET_ONE = void 0;
const defines_1 = require("./defines");
const MYSQL_GET_ONE = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (action = null, condition = {}) {
    const MysqlModel = (0, defines_1.select_mysql_model)(action);
    try {
        return yield MysqlModel.findOne({ where: condition, logging: false, raw: true });
    }
    catch (e) {
        if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`) {
            throw new Error(`Нет доступа к базе данных.`);
        }
        else {
            throw new Error(e);
        }
    }
});
exports.MYSQL_GET_ONE = MYSQL_GET_ONE;
const MYSQL_GET_ALL = (PARAMS) => __awaiter(void 0, void 0, void 0, function* () {
    //Set default values
    const { action = null, params = {}, attributes = undefined, limit = undefined, order = undefined } = PARAMS;
    const MysqlModel = (0, defines_1.select_mysql_model)(action);
    try {
        return yield MysqlModel.findAll({ where: params, logging: false, raw: true, attributes, limit, order });
    }
    catch (e) {
        if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`) {
            throw new Error(`Нет доступа к базе данных.`);
        }
        else {
            console.error('action', action, 'params', params, 'attributes', attributes);
            throw new Error(e);
        }
    }
});
exports.MYSQL_GET_ALL = MYSQL_GET_ALL;
const MYSQL_UPDATE = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (action = null, condition = {}, values = {}) {
    const MysqlModel = (0, defines_1.select_mysql_model)(action);
    if (!condition || Object.keys(values).length == 0) {
        throw new Error(`DB: (mysql update) undefined condition`);
    }
    if (!values || Object.keys(values).length == 0) {
        throw new Error(`DB: (mysql update) undefined values`);
    }
    try {
        return yield MysqlModel.update(values, { where: condition, logging: false });
    }
    catch (e) {
        if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`) {
            throw new Error(`Нет доступа к базе данных.`);
        }
        else {
            throw new Error(e);
        }
    }
});
exports.MYSQL_UPDATE = MYSQL_UPDATE;
const MYSQL_DELETE = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (action = null, condition = {}) {
    const MysqlModel = (0, defines_1.select_mysql_model)(action);
    if (!condition) {
        throw new Error(`DB: (mysql delete) нет условия`);
    }
    if (Object.keys(condition).length == 0) {
        throw new Error(`DB: (mysql delete) условие для удаления всей таблицы ${action}`);
    }
    try {
        return yield MysqlModel.destroy({
            where: condition, logging: false
        });
    }
    catch (e) {
        if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`) {
            throw new Error(`Нет доступа к базе данных.`);
        }
        else {
            console.error('can not delete', action, condition);
        }
    }
});
exports.MYSQL_DELETE = MYSQL_DELETE;
const MYSQL_SAVE = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (action = null, values, ignore_duplicates = true) {
    const MysqlModel = (0, defines_1.select_mysql_model)(action);
    try {
        if (typeof values.length !== 'undefined' && values.length > 0) {
            return yield MysqlModel.bulkCreate(values, { logging: false, ignoreDuplicates: ignore_duplicates });
        }
        else {
            return (yield MysqlModel.upsert(values, { logging: false })).shift();
        }
    }
    catch (e) {
        if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`) {
            throw new Error(`Нет доступа к базе данных.`);
        }
        else {
            throw new Error(e);
        }
    }
});
exports.MYSQL_SAVE = MYSQL_SAVE;
