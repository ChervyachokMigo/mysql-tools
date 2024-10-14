"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transfer_prepare = void 0;
const defines_1 = require("../defines");
const beatmaps_1 = require("../preparations/beatmaps");
// import { telegram_prepare } from "../preparations/telegram";
// import { discord_prepare } from "../preparations/discord";
// import { scores_prepare } from "../preparations/scores";
// import { twitchchat_prepare } from "../preparations/twitchchat";
// import { webserver_prepare } from "../preparations/webserver";
const transfer_prepare = async ({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        const MYSQL_CREDENTIALS = { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES };
        const connections = await (0, defines_1.prepareDB)(MYSQL_CREDENTIALS);
        const beatmaps_connection = (_a = connections.find(x => x.name === DATABASES.DB_BEATMAPS)) === null || _a === void 0 ? void 0 : _a.connection;
        const telegram_connection = (_b = connections.find(x => x.name === DATABASES.DB_TELEGRAM_BOT)) === null || _b === void 0 ? void 0 : _b.connection;
        const discord_connection = (_c = connections.find(x => x.name === DATABASES.DB_DISCORD)) === null || _c === void 0 ? void 0 : _c.connection;
        const twitchchat_connection = (_d = connections.find(x => x.name === DATABASES.DB_TWITCHCHAT)) === null || _d === void 0 ? void 0 : _d.connection;
        const scores_connection = (_e = connections.find(x => x.name === DATABASES.DB_SCORES)) === null || _e === void 0 ? void 0 : _e.connection;
        const webserver_connection = (_f = connections.find(x => x.name === DATABASES.DB_WEBSERVER)) === null || _f === void 0 ? void 0 : _f.connection;
        const tests_connection = (_g = connections.find(x => x.name === DATABASES.DB_TESTS)) === null || _g === void 0 ? void 0 : _g.connection;
        (0, beatmaps_1.beatmaps_prepare)(beatmaps_connection);
        /*telegram_prepare(telegram_connection, beatmaps_connection);
        discord_prepare(discord_connection, twitchchat_connection);
        scores_prepare(scores_connection, beatmaps_connection);
        twitchchat_prepare(twitchchat_connection, discord_connection);
        webserver_prepare(webserver_connection);*/
        await (0, defines_1.prepareEND)();
    }
    catch (e) {
        console.error(e);
        throw new Error(e);
    }
    return true;
};
exports.transfer_prepare = transfer_prepare;
