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
exports.export_prepare = void 0;
const defines_1 = require("../defines");
const beatmaps_1 = require("../preparations/beatmaps");
const telegram_1 = require("../preparations/telegram");
const discord_1 = require("../preparations/discord");
const scores_1 = require("../preparations/scores");
const twitchchat_1 = require("../preparations/twitchchat");
const webserver_1 = require("../preparations/webserver");
const export_prepare = (_a) => __awaiter(void 0, [_a], void 0, function* ({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES }) {
    var _b, _c, _d, _e, _f, _g;
    try {
        const connections = yield (0, defines_1.prepareDB)({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES });
        const beatmaps_connection = (_b = connections.find(x => x.name === DATABASES.DB_BEATMAPS)) === null || _b === void 0 ? void 0 : _b.connection;
        const telegram_connection = (_c = connections.find(x => x.name === DATABASES.DB_TELEGRAM_BOT)) === null || _c === void 0 ? void 0 : _c.connection;
        const discord_connection = (_d = connections.find(x => x.name === DATABASES.DB_DISCORD)) === null || _d === void 0 ? void 0 : _d.connection;
        const twitchchat_connection = (_e = connections.find(x => x.name === DATABASES.DB_TWITCHCHAT)) === null || _e === void 0 ? void 0 : _e.connection;
        const scores_connection = (_f = connections.find(x => x.name === DATABASES.DB_SCORES)) === null || _f === void 0 ? void 0 : _f.connection;
        const webserver_connection = (_g = connections.find(x => x.name === DATABASES.DB_WEBSERVER)) === null || _g === void 0 ? void 0 : _g.connection;
        //const tests_connection = 		connections.find( x=> x.name === DATABASES.DB_TESTS 		)?.connection;
        (0, beatmaps_1.beatmaps_prepare)(beatmaps_connection);
        (0, telegram_1.telegram_prepare)(telegram_connection, beatmaps_connection);
        (0, discord_1.discord_prepare)(discord_connection, twitchchat_connection);
        (0, scores_1.scores_prepare)(scores_connection, beatmaps_connection);
        (0, twitchchat_1.twitchchat_prepare)(twitchchat_connection, discord_connection);
        (0, webserver_1.webserver_prepare)(webserver_connection);
        yield (0, defines_1.prepareEND)();
    }
    catch (e) {
        console.error(e);
        throw new Error(e);
    }
    return true;
});
exports.export_prepare = export_prepare;
