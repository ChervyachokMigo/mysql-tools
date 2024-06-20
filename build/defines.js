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
exports.select_mysql_model = exports.add_model_names = exports.prepareEND = exports.prepareDB = void 0;
const promise_1 = require("mysql2/promise");
const core_1 = require("@sequelize/core");
const sequelize_connections = [];
const mysql_actions = [];
const get_model_field_list = (model, model_list) => __awaiter(void 0, void 0, void 0, function* () {
    const { all = false, primary = false } = model_list;
    return yield Promise.all(Object.entries(yield model.describe())
        // eslint-disable-next-line no-unused-vars
        .filter(([key, value]) => all ? true : primary ? value.primaryKey : !value.primaryKey)
        // eslint-disable-next-line no-unused-vars
        .map(([key, value]) => key));
});
const check_connect = (MYSQL_CREDENTIALS) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('[База данных]', 'Проверка соединения');
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;
    try {
        const connection = yield (0, promise_1.createConnection)(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`);
        for (let DB_NAME of DATABASES) {
            yield connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        }
        yield connection.end();
        return true;
    }
    catch (e) {
        console.error('проверьте правильность данных\n');
        Object.entries(MYSQL_CREDENTIALS).forEach(([key, val]) => !val ?
            console.log(`${key}: Ошибка: отсутствует значение\n`) : null);
        if (e.code === 'ECONNREFUSED') {
            console.error('База данных', 'ошибка соединения', 'Нет доступа к базе');
        }
        else {
            console.error('База данных', 'ошибка базы', e);
        }
        return false;
    }
});
const prepareDB = (MYSQL_CREDENTIALS_1, ...args_1) => __awaiter(void 0, [MYSQL_CREDENTIALS_1, ...args_1], void 0, function* (MYSQL_CREDENTIALS, logging = false) {
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;
    console.log('[База данных]', 'Подготовка баз данных');
    if (!(yield check_connect(MYSQL_CREDENTIALS))) {
        throw new Error('Нет доступа к базе');
    }
    try {
        const results = [];
        if (DATABASES && typeof DATABASES.length !== 'undefined' && DATABASES.length > 0) {
            for (let DB_NAME of DATABASES) {
                const sequelize_connection = new core_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
                    dialect: 'mysql',
                    define: {
                        updatedAt: false,
                        createdAt: false,
                        deletedAt: false
                    },
                    logging,
                });
                results.push(sequelize_connection);
                sequelize_connections.push(sequelize_connection);
            }
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
const prepareEND = (...args_2) => __awaiter(void 0, [...args_2], void 0, function* (logging = false, alter = false) {
    for (let sequelize_connection of sequelize_connections) {
        yield sequelize_connection.sync({ logging, alter });
    }
    yield Promise.all(mysql_actions.map((_a, i_1, a_1) => __awaiter(void 0, [_a, i_1, a_1], void 0, function* ({ names, model }, i, a) {
        a[i].attributes = Object.entries(yield a[i].model.describe()).map(([name, attribute]) => ({ name, attribute }));
        a[i].fileds = yield get_model_field_list(model, { all: true });
        a[i].keys = yield get_model_field_list(model, { primary: true });
        a[i].non_keys = a[i].fileds.filter(v => !a[i].keys.includes(v));
    })));
    console.log('[База данных]', 'Подготовка завершена');
});
exports.prepareEND = prepareEND;
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
