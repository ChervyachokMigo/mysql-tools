import { Sequelize } from "sequelize";
import { beatmap_md5 } from "../models/beatmaps/beatmaps_md5";
import { beatmap_id } from "../models/beatmaps/beatmap_id";
import { beatmap_info } from "../models/beatmaps/beatmap_info";
import { beatmap_pp } from "../models/beatmaps/beatmap_pp";
import { beatmap_star } from "../models/beatmaps/beatmap_star";

export const beatmaps_prepare = ( connection: Sequelize | undefined ) => {

	if (typeof connection === 'undefined') {
		throw new Error('no connection in beatmaps_prepare');
	}

	const model = {
		beatmap_md5: 	beatmap_md5(connection),
		beatmap_id: 	beatmap_id(connection),
		beatmap_info: 	beatmap_info(connection),
        beatmap_pp: 	beatmap_pp(connection),
        beatmap_star: 	beatmap_star(connection),
	};

	model.beatmap_md5	.hasOne	( model.beatmap_id, 	{ foreignKey: 'md5', foreignKeyConstraint: false});
	model.beatmap_md5	.hasOne	( model.beatmap_info, 	{ foreignKey: 'md5', foreignKeyConstraint: false});
	model.beatmap_md5	.hasOne	( model.beatmap_star, 	{ foreignKey: 'md5', foreignKeyConstraint: false});

	model.beatmap_id	.hasOne	( model.beatmap_info, 	{ foreignKey: 'md5', foreignKeyConstraint: false});
	model.beatmap_id	.hasOne	( model.beatmap_star, 	{ foreignKey: 'md5', foreignKeyConstraint: false});

	model.beatmap_info	.hasOne	( model.beatmap_star, 	{ foreignKey: 'md5', foreignKeyConstraint: false});

	model.beatmap_md5	.hasMany ( model.beatmap_pp, 	{ foreignKey: 'md5', foreignKeyConstraint: false});
	model.beatmap_id	.hasMany ( model.beatmap_pp, 	{ foreignKey: 'md5', foreignKeyConstraint: false});
	model.beatmap_info	.hasMany ( model.beatmap_pp, 	{ foreignKey: 'md5', foreignKeyConstraint: false});

}