import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const beatmap_params = (connection: Sequelize) => {
		
	const model = define_model(connection, 'beatmap_params', {
		md5: {type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true},
		bpm_min: {type: DataTypes.INTEGER, allowNull: false},
		bpm_max: {type: DataTypes.INTEGER, allowNull: false},
		bpm_avg: {type: DataTypes.INTEGER, allowNull: false},
		total_time: {type: DataTypes.INTEGER, allowNull: false},
		drain_time: {type: DataTypes.INTEGER, allowNull: false},
		break_time: {type: DataTypes.INTEGER, allowNull: false},
		circles_time: {type: DataTypes.INTEGER, allowNull: false},
		sliders_time: {type: DataTypes.INTEGER, allowNull: false},
		objects_time: {type: DataTypes.INTEGER, allowNull: false},
		hit_count: {type: DataTypes.INTEGER, allowNull: false},
		slider_count: {type: DataTypes.INTEGER, allowNull: false},
		spinner_count: {type: DataTypes.INTEGER, allowNull: false},
		stream_difficulty: {type: DataTypes.FLOAT, allowNull: false},
	}, {noPrimaryKey: false});

	return model;
	
}