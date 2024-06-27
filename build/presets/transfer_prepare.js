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
exports.transfer_prepare = void 0;
const defines_1 = require("../defines");
const beatmaps_1 = require("../preparations/beatmaps");
const transfer_prepare = (_a) => __awaiter(void 0, [_a], void 0, function* ({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES }) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    try {
        const MYSQL_CREDENTIALS = { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES };
        const connections = yield (0, defines_1.prepareDB)(MYSQL_CREDENTIALS);
        const beatmaps_connection = (_b = connections.find(x => x.name === DATABASES.DB_BEATMAPS)) === null || _b === void 0 ? void 0 : _b.connection;
        const telegram_connection = (_c = connections.find(x => x.name === DATABASES.DB_TELEGRAM_BOT)) === null || _c === void 0 ? void 0 : _c.connection;
        const discord_connection = (_d = connections.find(x => x.name === DATABASES.DB_DISCORD)) === null || _d === void 0 ? void 0 : _d.connection;
        const twitchchat_connection = (_e = connections.find(x => x.name === DATABASES.DB_TWITCHCHAT)) === null || _e === void 0 ? void 0 : _e.connection;
        const scores_connection = (_f = connections.find(x => x.name === DATABASES.DB_SCORES)) === null || _f === void 0 ? void 0 : _f.connection;
        const webserver_connection = (_g = connections.find(x => x.name === DATABASES.DB_WEBSERVER)) === null || _g === void 0 ? void 0 : _g.connection;
        const tests_connection = (_h = connections.find(x => x.name === DATABASES.DB_TESTS)) === null || _h === void 0 ? void 0 : _h.connection;
        const beatmaps_old_connection = (_j = connections.find(x => x.name === DATABASES.DB_BEATMAPS_OLD)) === null || _j === void 0 ? void 0 : _j.connection;
        (0, beatmaps_1.beatmaps_prepare)(beatmaps_connection);
        /*telegram_prepare(telegram_connection, beatmaps_connection);
        discord_prepare(discord_connection, twitchchat_connection);
        scores_prepare(scores_connection, beatmaps_connection);
        twitchchat_prepare(twitchchat_connection, discord_connection, beatmaps_connection);
        webserver_prepare(webserver_connection);*/
        yield (0, defines_1.prepareEND)();
    }
    catch (e) {
        console.error(e);
        throw new Error(e);
    }
    return true;
});
exports.transfer_prepare = transfer_prepare;
