import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const score_legacy = (connection: Sequelize) => {

	const model = define_model(connection, 'osu_score_legacy', {
		md5: {type: DataTypes.INTEGER, allowNull: false},
		beatmap_id: {type: DataTypes.INTEGER, allowNull: false},
		id: {type: DataTypes.BIGINT, allowNull: false, unique: true, primaryKey: true},
		userid: {type: DataTypes.INTEGER, allowNull: false},
		gamemode: {type: DataTypes.TINYINT, defaultValue: 0, allowNull: false},
		rank: {type: DataTypes.TINYINT, allowNull: false},
		date: {type: DataTypes.STRING, allowNull: false},
		total_score: {type: DataTypes.INTEGER, allowNull: false},
		max_combo: {type: DataTypes.INTEGER, allowNull: false},
		pp: {type: DataTypes.FLOAT, allowNull: false},
		mods: {type: DataTypes.STRING, allowNull: false},
		best: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
		count_50: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_100: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_300: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_katu: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_geki: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_miss: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		is_fc: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
	});
	
	return model;
	
}