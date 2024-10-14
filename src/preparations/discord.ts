import { Sequelize } from "sequelize";

import { channel } from "../models/discord/channel";
import { cryptopairs } from "../models/discord/cryptopairs";
import { guild_service_tracking } from "../models/discord/guild_service_tracking";
import { guild_settings } from "../models/discord/guild_settings";
import { nibbers } from "../models/discord/nibbers";
import { osu_activity } from "../models/discord/osu_activity";
import { osu_hunter_tracking } from "../models/discord/osu_hunter_tracking";
import { osu_profile } from "../models/discord/osu_profile";
import { osu_replay_attachment } from "../models/discord/osu_replay_attachment";
import { osu_replay_cache } from "../models/discord/osu_replay_cache";
import { osu_score } from "../models/discord/osu_score";
import { reacion_role } from "../models/discord/reacion_role";
import { remind } from "../models/discord/remind";
import { role } from "../models/discord/role";
import { steam_user } from "../models/discord/steam_user";
import { token } from "../models/discord/token";
import { trovo_clips } from "../models/discord/trovo_clips";
import { trovo_user } from "../models/discord/trovo_user";
import { twitch_clips } from "../models/discord/twitch_clips";
import { twitch_user } from "../models/discord/twitch_user";
import { user } from "../models/discord/user";
import { vk_friend } from "../models/discord/vk_friend";
import { vk_user } from "../models/discord/vk_user";
import { youtube_channel } from "../models/discord/youtube_channel";
import { youtube_video } from "../models/discord/youtube_video";

import { twitchchat } from "../models/twitchchat/twitchchat";

export const discord_prepare = ( discord_connection: Sequelize | undefined, twitchchat_connection: Sequelize | undefined ) => {

	if (typeof discord_connection === 'undefined' || typeof twitchchat_connection === 'undefined') {
		throw new Error('no connection in discord_prepare');
	}

	channel(discord_connection);
	cryptopairs(discord_connection);
	guild_service_tracking(discord_connection);
	guild_settings(discord_connection);
	nibbers(discord_connection);
	osu_activity(discord_connection);
	osu_hunter_tracking(discord_connection);
	osu_profile(discord_connection);
	osu_replay_attachment(discord_connection);
	osu_replay_cache(discord_connection);
	osu_score(discord_connection);
	reacion_role(discord_connection);
	remind(discord_connection);
	role(discord_connection);
	steam_user(discord_connection);
	token(discord_connection);
	trovo_clips(discord_connection);
	trovo_user(discord_connection);
	twitch_clips(discord_connection);
	twitch_user(discord_connection);
	user(discord_connection);
	vk_friend(discord_connection);
	vk_user(discord_connection);
	youtube_channel(discord_connection);
	youtube_video(discord_connection);

	twitchchat(twitchchat_connection);
	
}