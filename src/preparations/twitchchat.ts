import { Sequelize } from "@sequelize/core";

import { twitchchat } from "../models/twitchchat/twitchchat";
import { twitch_banned } from "../models/twitchchat/twitch_banned";
import { twitch_osu_binds } from "../models/twitchchat/twitch_osu_binds";
import { twitchchat_enabled } from "../models/twitchchat/twitchchat_enabled";
import { twitchchat_ignores } from "../models/twitchchat/twitchchat_ignores";
import { twitchchat_sended_notify } from "../models/twitchchat/twitchchat_sended_notify";
import { command_aliases } from "../models/twitchchat/command_aliases";
import { custom_commands } from "../models/twitchchat/custom_commands";
import { user_stats } from "../models/twitchchat/user_stats";
import { token } from "../models/discord/token";

export const twitchchat_prepare = ( 
	twitchchat_connection: Sequelize | undefined, 
	discord_connection: Sequelize | undefined ) => {

	if (typeof twitchchat_connection === 'undefined' || 
		typeof discord_connection === 'undefined') {
		throw new Error('no connection in twitchchat_prepare');
	}

	const model = {
		twitchchat: 				twitchchat 			(twitchchat_connection),
		twitch_banned: 				twitch_banned 		(twitchchat_connection),
        twitch_osu_binds: 			twitch_osu_binds 	(twitchchat_connection),
        twitchchat_enabled: 		twitchchat_enabled 	(twitchchat_connection),
        twitchchat_ignores: 		twitchchat_ignores 	(twitchchat_connection),
		twitchchat_sended_notify: 	twitchchat_sended_notify (twitchchat_connection),
        command_aliases: 			command_aliases 	(twitchchat_connection),
        custom_commands: 			custom_commands 	(twitchchat_connection),
		user_stats:					user_stats			(twitchchat_connection),
		
        token: 						token 				(discord_connection)
	}

	model.custom_commands .hasMany(	model.command_aliases, {foreignKey: 'command_id', foreignKeyConstraints: false});

}