"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.select_mysql_model = exports.get_attributes_types = exports.find_model = exports.get_models_names = exports.define_model = exports.add_model_names = exports.get_connection = exports.prepareEND = exports.prepareDB = void 0;
const promise_1 = require("mysql2/promise");
const core_1 = __importDefault(require("@sequelize/core"));
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 3306;
const sequelize_connections = [];
const mysql_actions = [];
/**
* @param {Model} Model Execute model
* @param {Boolean} all If true get all fields, else get only non-primary keys or only primary keys
* @param {Boolean} primary If true get only primary keys, else get only non-primary keys
* @return {Array} Array of fields of Model
*/
const get_model_field_list = async (model, model_list) => {
    const { all = false, primary = false } = model_list;
    return await Promise.all(Object.entries(await model.describe())
        // eslint-disable-next-line no-unused-vars
        .filter(([key, value]) => all ? true : primary ? value.primaryKey : !value.primaryKey)
        // eslint-disable-next-line no-unused-vars
        .map(([key, value]) => key));
};
const check_connect = async (MYSQL_CREDENTIALS) => {
    console.log('[База данных]', 'Проверка соединения');
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;
    try {
        const connection = await (0, promise_1.createConnection)(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST || DEFAULT_HOST}:${DB_PORT || DEFAULT_PORT}`);
        for (let DB_NAME of Object.values(DATABASES)) {
            await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
        }
        await connection.end();
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
};
const prepareDB = async (MYSQL_CREDENTIALS, logging = false) => {
    const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;
    console.log('[База данных]', 'Подготовка баз данных');
    if (!(await check_connect(MYSQL_CREDENTIALS))) {
        throw new Error('Нет доступа к базе');
    }
    try {
        const url = `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST || DEFAULT_HOST}:${DB_PORT || DEFAULT_PORT}`;
        if (DATABASES && typeof DATABASES === 'object' && Object.values(DATABASES).length > 0) {
            for (let DB_NAME of Object.values(DATABASES)) {
                const sequelize_connection = new core_1.default({ url,
                    dialect: 'mysql',
                    define: {
                        updatedAt: false,
                        createdAt: false,
                        deletedAt: false
                    },
                    logging,
                    pool: {
                        max: 30,
                        min: 0,
                        acquire: 60000,
                        idle: 60000
                    },
                    noTypeValidation: true,
                });
                sequelize_connections.push({ connection: sequelize_connection, name: DB_NAME });
            }
            return sequelize_connections;
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
};
exports.prepareDB = prepareDB;
const prepareEND = async (logging = false, alter = false) => {
    for (let sequelize_connection of sequelize_connections) {
        await sequelize_connection.connection.sync({ logging, alter });
    }
    await Promise.all(mysql_actions.map(async ({ names, model }, i, a) => {
        a[i].attributes = Object.entries(await a[i].model.describe()).map(([name, attribute]) => ({ name, attribute }));
        a[i].fileds = await get_model_field_list(model, { all: true });
        a[i].keys = await get_model_field_list(model, { primary: true });
        a[i].non_keys = a[i].fileds.filter(v => !a[i].keys.includes(v));
    }));
    console.log('[База данных]', 'Подготовка завершена');
};
exports.prepareEND = prepareEND;
const get_connection = (DB_NAME) => sequelize_connections.find(x => x.name === DB_NAME);
exports.get_connection = get_connection;
const add_model_names = (action) => mysql_actions.push(action);
exports.add_model_names = add_model_names;
const define_model = (connection, names, fields, options) => {
    const names_lowcase = Array.isArray(names) ? names.map(x => x.toLocaleLowerCase()) : names.toLocaleLowerCase();
    const model_name = Array.isArray(names_lowcase) ? names_lowcase[0] : names_lowcase;
    const founded_model = mysql_actions.find(x => {
        if (Array.isArray(x.names)) {
            if (Array.isArray(names_lowcase)) {
                return x.names.findIndex(y => names_lowcase.findIndex(z => z === y) > -1) > -1;
            }
            else {
                return x.names.findIndex(y => names_lowcase === y) > -1;
            }
        }
        else {
            if (Array.isArray(names_lowcase)) {
                return names_lowcase.findIndex(y => y === x.names) > -1;
            }
            else {
                return names_lowcase === x.names;
            }
        }
    });
    if (founded_model) {
        return founded_model.model;
    }
    const model = connection.define(model_name, fields, options);
    const cached_connection = sequelize_connections.find(v => v.connection === connection);
    if (typeof cached_connection === 'undefined') {
        console.error('[База данных]', '(define_model)', `undefined connection: ${connection}`);
        throw new Error('undefined connection');
    }
    (0, exports.add_model_names)({ names: names_lowcase, model, database: cached_connection.name });
    return model;
};
exports.define_model = define_model;
const get_models_names = () => mysql_actions.map(x => x.names);
exports.get_models_names = get_models_names;
const find_model = (name) => {
    const name_lowcase = name.toLocaleLowerCase();
    const MysqlModel = mysql_actions.find(model => {
        if (Array.isArray(model.names)) {
            return model.names.findIndex(val => val === name_lowcase) > -1;
        }
        else {
            return model.names === name_lowcase;
        }
    });
    if (!MysqlModel) {
        console.error('[База данных]', '(find_model)', `undefined model: ${name_lowcase}`);
        throw new Error(`unknown mysql model: ${name_lowcase}`);
    }
    return MysqlModel;
};
exports.find_model = find_model;
const get_attributes_types = (name) => (0, exports.find_model)(name).attributes.map(x => x.attribute.type);
exports.get_attributes_types = get_attributes_types;
const select_mysql_model = (action) => {
    if (!action) {
        console.error('[База данных]', '(select_mysql_model)', `empty action: ${action}`);
        throw new Error(`unknown mysql model: ${action}`);
    }
    const MysqlModel = (0, exports.find_model)(action);
    return MysqlModel.model;
};
exports.select_mysql_model = select_mysql_model;
