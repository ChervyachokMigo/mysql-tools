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
const { writeFileSync } = require('node:fs');
const path = require('node:path');
const { find_model, MYSQL_GET_ALL } = require('mysql-tools');
const { csv_folder_path } = require('../../misc/const');
const { spawnSync } = require('child_process');
const { prepareDB } = require('./defines');
const { folder_prepare, print_processed } = require('../../tools/misc');
const { get_attributes_types } = require('../../modules/DB/tools');
const _this = module.exports = {
    export_table_csv: (tablename_1, ...args_1) => __awaiter(void 0, [tablename_1, ...args_1], void 0, function* (tablename, string_quotes = '"', separator = ';') {
        if (!tablename || typeof find_model(tablename) === 'undefined') {
            console.error('tablename invalid', tablename);
            return false;
        }
        if (!(yield prepareDB())) {
            console.error('prepareDB failed');
            return false;
        }
        console.log('geting all data');
        const mysql_values = yield MYSQL_GET_ALL({ action: tablename });
        console.log('reciving', mysql_values.length, 'rows');
        _this.save_csv(mysql_values, tablename, string_quotes, separator);
    }),
    save_csv: (values = null, tablename, string_quotes = '"', separator = ';') => {
        folder_prepare(csv_folder_path);
        if (!tablename || typeof find_model(tablename) === 'undefined') {
            console.error('tablename invalid', tablename);
            return false;
        }
        if (values && values.length > 0) {
            console.log('preparing data');
            const now = new Date();
            const filename = `${tablename}-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-` +
                `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
            const header = Object.keys(values[0]).map(x => `"${x}"`).join(separator);
            const types = get_attributes_types(tablename).join(separator);
            let data = [];
            data.push('string_quotes:' + string_quotes);
            data.push('separator:' + separator);
            data.push(header);
            data.push(types);
            for (let i in values) {
                data.push(Object.values(values[i]).map(x => typeof x === 'string' ? `${string_quotes}${x}${string_quotes}` : x).join(separator));
                print_processed({ current: i, size: values.length, name: 'rows' });
            }
            try {
                console.log('saving csv');
                writeFileSync(path.join(csv_folder_path, filename + '.csv'), data.join('\r\n'), { encoding: 'utf8' });
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            console.error('save_csv > no values');
        }
    },
};
