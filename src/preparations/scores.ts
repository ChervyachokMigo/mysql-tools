import { Sequelize } from "@sequelize/core";

import { score_legacy } from "../models/scores/score_legacy";
import { score } from "../models/scores/score";
import { user_grade } from "../models/scores/user_grade";

import { beatmap_md5 } from "../models/beatmaps/beatmaps_md5";

export const scores_prepare = ( score_connection: Sequelize | undefined, beatmap_connection: Sequelize | undefined ) => {

	if (typeof score_connection === 'undefined' || typeof beatmap_connection === 'undefined') {
		throw new Error('no connection in scores_prepare');
	}

	const model = {
		score_legacy: 	score_legacy(score_connection),
		score: 			score		(score_connection),
		user_grade: 	user_grade	(score_connection),

		beatmap_md5: 	beatmap_md5	(beatmap_connection)
	}

	model.user_grade	.hasMany( model.score_legacy, 	{ foreignKey: 'userid',  foreignKeyConstraints: false });
	model.user_grade	.hasMany( model.score, 			{ foreignKey: 'userid',  foreignKeyConstraints: false });

	model.beatmap_md5	.hasMany( model.score_legacy, 	{ foreignKey: 'md5',  foreignKeyConstraints: false });
	model.beatmap_md5	.hasMany( model.score, 			{ foreignKey: 'md5',  foreignKeyConstraints: false });

}