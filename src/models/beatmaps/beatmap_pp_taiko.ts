import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const beatmap_pp_taiko = (connection: Sequelize) => {
		
	const model = define_model(connection, 'taiko_beatmap_pp', {
		md5: {type: DataTypes.INTEGER, allowNull: false, unique: 'action_key'},
		mods: {type: DataTypes.INTEGER, allowNull: false, unique: 'action_key'},
		accuracy: {type: DataTypes.INTEGER, defaultValue: 100, allowNull: false, unique: 'action_key'},
		pp_total: {type: DataTypes.INTEGER, allowNull: false},
		pp_difficulty: {type: DataTypes.INTEGER, allowNull: false},
		pp_ur: {type: DataTypes.INTEGER, allowNull: false},
		pp_accuracy: {type: DataTypes.INTEGER, allowNull: false},
		stars: {type: DataTypes.FLOAT, allowNull: false},
		diff_mono_stamina: {type: DataTypes.FLOAT, allowNull: false},
		diff_stamina: {type: DataTypes.FLOAT, allowNull: false},
		diff_rhythm: {type: DataTypes.FLOAT, allowNull: false},
		diff_colour: {type: DataTypes.FLOAT, allowNull: false},
		diff_peak: {type: DataTypes.FLOAT, allowNull: false},
	}, {noPrimaryKey: false});

	return model;
	
}