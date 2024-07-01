"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitchchat_prepare = void 0;
const twitchchat_1 = require("../models/twitchchat/twitchchat");
const twitch_banned_1 = require("../models/twitchchat/twitch_banned");
const twitch_osu_binds_1 = require("../models/twitchchat/twitch_osu_binds");
const twitchchat_enabled_1 = require("../models/twitchchat/twitchchat_enabled");
const twitchchat_ignores_1 = require("../models/twitchchat/twitchchat_ignores");
const twitchchat_sended_notify_1 = require("../models/twitchchat/twitchchat_sended_notify");
const command_aliases_1 = require("../models/twitchchat/command_aliases");
const custom_commands_1 = require("../models/twitchchat/custom_commands");
const token_1 = require("../models/discord/token");
const twitchchat_prepare = (twitchchat_connection, discord_connection, beatmap_connection) => {
    if (typeof twitchchat_connection === 'undefined' ||
        typeof discord_connection === 'undefined' ||
        typeof beatmap_connection === 'undefined') {
        throw new Error('no connection in twitchchat_prepare');
    }
    const model = {
        twitchchat: (0, twitchchat_1.twitchchat)(twitchchat_connection),
        twitch_banned: (0, twitch_banned_1.twitch_banned)(twitchchat_connection),
        twitch_osu_binds: (0, twitch_osu_binds_1.twitch_osu_binds)(twitchchat_connection),
        twitchchat_enabled: (0, twitchchat_enabled_1.twitchchat_enabled)(twitchchat_connection),
        twitchchat_ignores: (0, twitchchat_ignores_1.twitchchat_ignores)(twitchchat_connection),
        twitchchat_sended_notify: (0, twitchchat_sended_notify_1.twitchchat_sended_notify)(twitchchat_connection),
        command_aliases: (0, command_aliases_1.command_aliases)(twitchchat_connection),
        custom_commands: (0, custom_commands_1.custom_commands)(twitchchat_connection),
        token: (0, token_1.token)(discord_connection)
    };
    model.custom_commands.hasMany(model.command_aliases, { foreignKey: 'command_id', foreignKeyConstraints: false });
};
exports.twitchchat_prepare = twitchchat_prepare;
