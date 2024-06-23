"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.folder_prepare = void 0;
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
