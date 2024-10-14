import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const beatmap_pp = (connection: Sequelize) => {
		
	const model = define_model(connection, 'osu_beatmap_pp', {
		md5: {type: DataTypes.INTEGER, allowNull: false, unique: 'action_key'},
		mods: {type: DataTypes.INTEGER, allowNull: false, unique: 'action_key'},
		accuracy: {type: DataTypes.INTEGER, defaultValue: 100, allowNull: false, unique: 'action_key'},
		pp_total: {type: DataTypes.INTEGER, allowNull: false},
		pp_aim: {type: DataTypes.INTEGER, allowNull: false},
		pp_speed: {type: DataTypes.INTEGER, allowNull: false},
		pp_accuracy: {type: DataTypes.INTEGER, allowNull: false},
		stars: {type: DataTypes.FLOAT, allowNull: false},
		diff_aim: {type: DataTypes.FLOAT, allowNull: false},
		diff_speed: {type: DataTypes.FLOAT, allowNull: false},
		diff_sliders: {type: DataTypes.FLOAT, allowNull: false},
		speed_notes: {type: DataTypes.INTEGER, allowNull: false},
		AR: {type: DataTypes.FLOAT, allowNull: false},
		OD: {type: DataTypes.FLOAT, allowNull: false},
	});

	return model;
	
}