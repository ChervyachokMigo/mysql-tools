import { Sequelize } from "@sequelize/core";

import { sended_map } from "../models/telegram/sended_map";
import { download_map } from "../models/telegram/download_map";
import { not_found_map } from "../models/telegram/not_found_map";
import { long_map } from "../models/telegram/long_map";
import { tg_file } from "../models/telegram/tg_file";
import { beatmap_id } from "../models/beatmaps/beatmap_id";

export const telegram_prepare = ( telegram_connection: Sequelize | undefined, beatmap_connection: Sequelize | undefined ) => {

	if (typeof telegram_connection === 'undefined' || typeof beatmap_connection === 'undefined') {
		throw new Error('no connection in telegram_prepare');
	}

	const model = {
		sended_map: 	sended_map		(telegram_connection),
        download_map: 	download_map	(telegram_connection),
        not_found_map: 	not_found_map	(telegram_connection),
        long_map: 		long_map		(telegram_connection),

        tg_file: 		tg_file			(beatmap_connection),
        beatmap_id: 	beatmap_id		(beatmap_connection)
	}	

	model.tg_file	.hasMany(	model.beatmap_id, { foreignKey: 'beatmapset_id',  foreignKeyConstraints: false});
	
	/*const sended_map_db = connection.define ('sended_map', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	const map_to_download_db = connection.define ('map_to_download', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	const map_not_found = connection.define ('bancho_not_found', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	const map_too_long = connection.define ('map_too_long', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	const tg_file = connection.define ('tg_file', {
		beatmapset_id: {type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true},
		message_id: {type: DataTypes.INTEGER, allowNull: true}
	}, {noPrimaryKey: false});

	tg_file.hasMany(osu_beatmap_id, { foreignKey: 'beatmapset_id',  foreignKeyConstraintss: false});
	
	add_model_names({ names: 'tg_file', model: tg_file });
	
	add_model_names({ names: 'sended_map_db', model: sended_map_db });
	add_model_names({ names: 'map_to_download_db', model: map_to_download_db });
	add_model_names({ names: 'map_not_found', model: map_not_found });
	add_model_names({ names: 'map_too_long', model: map_too_long });*/
}