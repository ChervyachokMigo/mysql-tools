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
exports.pack_csvs = void 0;
const node_child_process_1 = require("node:child_process");
const node_fs_1 = require("node:fs");
const path_1 = __importDefault(require("path"));
const pack_csvs = (folder_path, tablename) => __awaiter(void 0, void 0, void 0, function* () {
    if (!folder_path || !(0, node_fs_1.existsSync)(folder_path)) {
        throw new Error('Error in module "pack table to csv": no exists folder path');
    }
    if (!tablename) {
        throw new Error('Error in module "pack table to csv": no table name');
    }
    const now = new Date();
    const filename = `${tablename}-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.7z`;
    const archive_name = path_1.default.join(folder_path, filename);
    const files_pattern = path_1.default.join(folder_path, '\\', '*.csv');
    console.log('creating archive csv files:', filename);
    const exe = path_1.default.join(__dirname, '..', '..', 'bin', '7z.exe');
    const args = [
        'a', //add files
        '-y', //assume yes
        '-mx9', //compression level
        archive_name,
        files_pattern
    ];
    const { stdout, stderr } = (0, node_child_process_1.spawnSync)(exe, args, { encoding: 'utf8' });
    console.log(stdout, stderr);
});
exports.pack_csvs = pack_csvs;
