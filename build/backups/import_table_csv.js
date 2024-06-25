"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load_csv = void 0;
const fs_1 = __importDefault(require("fs"));
const load_csv = (filepath) => {
    if (!fs_1.default.existsSync(filepath)) {
        throw new Error('no csv file at ' + filepath);
    }
    try {
        const data = fs_1.default.readFileSync(filepath, { encoding: 'binary' }).toString().split('\r\n');
        const string_quotes = data.shift().replace('string_quotes:', '');
        const separator = data.shift().replace('separator:', '');
        const header = data.shift().replace('"', '').split(separator);
        const types = data.shift().split(separator);
        const string_reg = new RegExp(`([0-9.,]+)|${string_quotes}(.*?)${string_quotes}`, 'gui');
        const replace_reg = new RegExp(string_quotes, 'gui');
        if (data.length === 0) {
            return [];
        }
        const data_splitted = data.map(x => {
            const str = x.match(string_reg);
            if (str) {
                return str.map(y => y.replace(replace_reg, ''));
            }
            else {
                return null;
            }
        });
        // parse content
        return data_splitted.map(x => {
            if (x === null) {
                return null;
            }
            if (x.length !== types.length) {
                console.error('wrong data length', x);
                return null;
            }
            return x.map((y, i) => {
                if (types[i].startsWith('INT') || types[i].startsWith('FLOAT') || types[i].startsWith('TINYINT')) {
                    return Number(y);
                }
                else if (types[i].startsWith('BIGINT')) {
                    return BigInt(y);
                }
                else {
                    //if (types[i].startsWith('VARCHAR')
                    return y;
                }
            });
        })
            .map(x => {
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
/*
export const import_table_csv = async ( filepath: string, tablename, chunk_size = 500 ) => {
        if (! await prepareDB()) {
            console.error('prepareDB failed');
            return false;
        }

        const content_objects = load_csv({ filepath });

        const chunks = split_array_on_chunks( content_objects, chunk_size);

        let count = 0;

        for (let chunk of chunks){
            count += chunk.length;
            await MYSQL_SAVE(tablename, chunk);
        }
        
    },
}*/ 
