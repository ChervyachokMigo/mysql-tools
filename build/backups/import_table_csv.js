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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.import_table_csv = exports.load_csv = void 0;
const tools_1 = require("../misc/tools");
const fs_1 = __importDefault(require("fs"));
const base_1 = require("../base");
const defines_1 = require("../defines");
const load_csv = (filepath) => {
    if (!fs_1.default.existsSync(filepath)) {
        throw new Error('no csv file at ' + filepath);
    }
    try {
        const data = fs_1.default.readFileSync(filepath, { encoding: 'binary' }).toString().split('\r\n');
        const string_quotes = data.shift().replace('string_quotes:', '');
        const separator = data.shift().replace('separator:', '');
        const header = data.shift().replace(/"/gui, '').split(separator);
        const types = data.shift().split(separator);
        const string_reg = new RegExp(`([0-9.,]+)|${string_quotes}(.*?)${string_quotes}`, 'gui');
        const replace_reg = new RegExp(string_quotes, 'gui');
        if (data.length === 0) {
            return [];
        }
        return data.map(x => {
            const str = x.match(string_reg);
            if (str) {
                return str.map((y, i) => {
                    if (types[i].startsWith('INT') || types[i].startsWith('FLOAT') || types[i].startsWith('TINYINT')) {
                        return Number(y);
                    }
                    else if (types[i].startsWith('BIGINT')) {
                        return BigInt(y.replace(replace_reg, ''));
                    }
                    else {
                        //if (types[i].startsWith('VARCHAR')
                        return y.replace(replace_reg, '');
                    }
                });
            }
            else {
                return null;
            }
        }).map(x => {
            if (x === null) {
                return null;
            }
            return Object.fromEntries(x.map((y, i) => [header[i], y]));
        }).filter(x => x !== null);
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.load_csv = load_csv;
const import_table_csv = (filepath_1, tablename_1, ...args_1) => __awaiter(void 0, [filepath_1, tablename_1, ...args_1], void 0, function* (filepath, tablename, chunk_size = 500) {
    if (!tablename || !(0, defines_1.find_model)(tablename)) {
        return {
            error: 'tablename invalid',
            action: tablename
        };
    }
    console.log('importing', tablename);
    const content_objects = (0, exports.load_csv)(filepath);
    const chunks = (0, tools_1.split_array_on_chunks)(content_objects, chunk_size);
    let count = 0;
    for (let chunk of chunks) {
        count += chunk.length;
        yield (0, base_1.MYSQL_SAVE)(tablename, chunk);
    }
    return {
        success: true,
        action: tablename
    };
});
exports.import_table_csv = import_table_csv;
