"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.export_prepare = void 0;
const defines_1 = require("../defines");
const beatmaps_1 = require("../preparations/beatmaps");
const telegram_1 = require("../preparations/telegram");
const discord_1 = require("../preparations/discord");
const scores_1 = require("../preparations/scores");
const twitchchat_1 = require("../preparations/twitchchat");
const webserver_1 = require("../preparations/webserver");
const export_prepare = async ({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES }) => {
    try {
        const connections = await (0, defines_1.prepareDB)({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES });
        const beatmaps_connection = connections.find(x => x.name === DATABASES.DB_BEATMAPS)?.connection;
        const telegram_connection = connections.find(x => x.name === DATABASES.DB_TELEGRAM_BOT)?.connection;
        const discord_connection = connections.find(x => x.name === DATABASES.DB_DISCORD)?.connection;
        const twitchchat_connection = connections.find(x => x.name === DATABASES.DB_TWITCHCHAT)?.connection;
        const scores_connection = connections.find(x => x.name === DATABASES.DB_SCORES)?.connection;
        const webserver_connection = connections.find(x => x.name === DATABASES.DB_WEBSERVER)?.connection;
        //const tests_connection = 		connections.find( x=> x.name === DATABASES.DB_TESTS 		)?.connection;
        (0, beatmaps_1.beatmaps_prepare)(beatmaps_connection);
        (0, telegram_1.telegram_prepare)(telegram_connection, beatmaps_connection);
        (0, discord_1.discord_prepare)(discord_connection, twitchchat_connection);
        (0, scores_1.scores_prepare)(scores_connection, beatmaps_connection);
        (0, twitchchat_1.twitchchat_prepare)(twitchchat_connection, discord_connection);
        (0, webserver_1.webserver_prepare)(webserver_connection);
        await (0, defines_1.prepareEND)();
    }
    catch (e) {
        console.error(e);
        throw new Error(e);
    }
    return true;
};
exports.export_prepare = export_prepare;
