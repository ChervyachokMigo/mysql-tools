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
    try {
        const MYSQL_CREDENTIALS = { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES };
        const connections = await (0, defines_1.prepareDB)(MYSQL_CREDENTIALS);
        const beatmaps_connection = connections.find(x => x.name === DATABASES.DB_BEATMAPS)?.connection;
        const telegram_connection = connections.find(x => x.name === DATABASES.DB_TELEGRAM_BOT)?.connection;
        const discord_connection = connections.find(x => x.name === DATABASES.DB_DISCORD)?.connection;
        const twitchchat_connection = connections.find(x => x.name === DATABASES.DB_TWITCHCHAT)?.connection;
        const scores_connection = connections.find(x => x.name === DATABASES.DB_SCORES)?.connection;
        const webserver_connection = connections.find(x => x.name === DATABASES.DB_WEBSERVER)?.connection;
        const tests_connection = connections.find(x => x.name === DATABASES.DB_TESTS)?.connection;
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
