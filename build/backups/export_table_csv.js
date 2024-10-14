"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.export_table_csv = exports.save_csv = void 0;
const base_1 = require("../base");
const defines_1 = require("../defines");
const node_fs_1 = require("node:fs");
const path = __importStar(require("node:path"));
const tools_1 = require("../misc/tools");
const save_csv = (csv_params, values = [], print_frequerency = 0) => {
    const default_string_quotes = csv_params.tablename === 'beatmap_info' ? '``' : '"';
    const { folder_path = '', tablename, string_quotes = default_string_quotes, separator = ';' } = csv_params;
    (0, tools_1.folder_prepare)(folder_path);
    if (values && Array.isArray(values) && values.length > 0) {
        const database_name = (0, defines_1.find_model)(Array.isArray(tablename) ? tablename[0] : tablename)?.database;
        const now = new Date();
        const filename = `${database_name}-${tablename}-${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}-` +
            `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
        const header = Object.keys(values[0]).map(x => `"${x}"`).join(separator);
        const types = (0, defines_1.get_attributes_types)(tablename).join(separator);
        const data = [];
        data.push('string_quotes:' + string_quotes);
        data.push('separator:' + separator);
        data.push(header);
        data.push(types);
        for (let i = 0; i < values.length; i++) {
            if (print_frequerency) {
                if (values.length >= print_frequerency) {
                    if (i % Math.trunc(values.length / print_frequerency) == 0) {
                        console.log(`processed "${tablename}" ${(i / values.length * 100).toFixed(0)}%`);
                    }
                }
                else {
                    console.log(`processed "${tablename}" ${(i / values.length * 100).toFixed(0)}%`);
                }
            }
            data.push(Object.values(values[i]).map(x => typeof x === 'string' ? `${string_quotes}${x}${string_quotes}` : x).join(separator));
        }
        try {
            const csv_path = path.join(folder_path, filename + '.csv');
            console.log('saving', filename + '.csv');
            (0, node_fs_1.writeFileSync)(csv_path, data.join('\r\n'), { encoding: 'utf8' });
        }
        catch (e) {
            console.error(e);
        }
    }
    else {
        console.error('save_csv > no values');
    }
};
exports.save_csv = save_csv;
const export_table_csv = async (csv_params) => {
    const { tablename = null } = csv_params;
    const action = Array.isArray(tablename) ? tablename[0] : tablename;
    if (!action || !(0, defines_1.find_model)(action)) {
        return {
            error: 'tablename invalid',
            action
        };
    }
    console.log('geting data from', action);
    const values = await (0, base_1.MYSQL_GET_ALL)({ action });
    //console.log('recived', values.length, 'rows');
    (0, exports.save_csv)(csv_params, values);
    return {
        success: values.length,
        action
    };
};
exports.export_table_csv = export_table_csv;
