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
exports.select_mysql_model = exports.add_model_names = exports.prepareDB = void 0;
const promise_1 = require("mysql2/promise");
const core_1 = require("@sequelize/core");
const mysql_actions = [];
const prepareDB = (MYSQL_CREDENTIALS_1, ...args_1) => __awaiter(void 0, [MYSQL_CREDENTIALS_1, ...args_1], void 0, function* (MYSQL_CREDENTIALS, alter = false, logging = false) {
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DATABASES } = MYSQL_CREDENTIALS;
    console.log('[База данных]', 'Подготовка баз данных');
    try {
        const connection = yield (0, promise_1.createConnection)(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`);
        const results = [];
        if (DATABASES && typeof DATABASES.length !== 'undefined' && DATABASES.length > 0) {
            for (let DB_NAME of DATABASES) {
                yield connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
                const sequelize_connection = new core_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
                    dialect: 'mysql',
                    define: {
                        updatedAt: false,
                        createdAt: false,
                        deletedAt: false
                    },
                    logging,
                });
                yield sequelize_connection.sync({ logging, alter });
                results.push(sequelize_connection);
            }
            yield connection.end();
            console.log('[База данных]', 'Подготовка завершена');
            return results;
        }
        else {
            throw new Error('[База данных] DATABASES не установлены');
        }
    }
    catch (e) {
        if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`) {
            throw new Error('Нет доступа к базе');
        }
        else {
            throw new Error(`ошибка базы: ${e}`);
        }
    }
});
exports.prepareDB = prepareDB;
const add_model_names = (action) => mysql_actions.push(action);
exports.add_model_names = add_model_names;
const select_mysql_model = (action) => {
    const MysqlModel = mysql_actions.find(model => {
        if (typeof model.names === 'string') {
            return model.names === action;
        }
        else if (typeof model.names === 'object') {
            return model.names.findIndex(val => val === action) > -1;
        }
        else {
            return false;
        }
    });
    if (!MysqlModel || !action) {
        console.error('[База данных]', '(select_mysql_model)', `undefined action: ${action}`);
        throw new Error(`unknown mysql model: ${action}`);
    }
    return MysqlModel.model;
};
exports.select_mysql_model = select_mysql_model;