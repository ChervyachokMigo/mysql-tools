"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split_array_on_chunks = exports.folder_prepare = void 0;
const node_fs_1 = require("node:fs");
const folder_prepare = (folder_path) => {
    try {
        if (!(0, node_fs_1.existsSync)(folder_path))
            (0, node_fs_1.mkdirSync)(folder_path, { recursive: true });
        return true;
    }
    catch (e) {
        console.error('Cannot create folder:', folder_path);
        console.error(e);
        return false;
    }
};
exports.folder_prepare = folder_prepare;
const split_array_on_chunks = (arr, len) => {
    if (typeof len === 'undefined' || len === 0) {
        return arr;
    }
    if (!Array.isArray(arr)) {
        throw new Error('split_array > array is not the object');
    }
    let chunks = [];
    let i = 0;
    while (i < arr.length) {
        chunks.push(arr.slice(i, i += len));
    }
    return chunks;
};
exports.split_array_on_chunks = split_array_on_chunks;
