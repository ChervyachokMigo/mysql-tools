import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const score = (connection: Sequelize) => {

	const model = define_model(connection, 'osu_score', {
		md5: {type: DataTypes.INTEGER, allowNull: false},
		beatmap_id: {type: DataTypes.INTEGER, allowNull: false},
		id: {type: DataTypes.BIGINT, allowNull: false, unique: true, primaryKey: true},
		legacy_id: {type: DataTypes.BIGINT, defaultValue: 0, allowNull: false},
		userid: {type: DataTypes.INTEGER, allowNull: false},
		gamemode: {type: DataTypes.TINYINT, defaultValue: 0, allowNull: false},
		rank: {type: DataTypes.TINYINT, allowNull: false},
		accuracy: {type: DataTypes.FLOAT, allowNull: false},
		date: {type: DataTypes.STRING,  allowNull: false},
		total_score: {type: DataTypes.INTEGER, allowNull: false},
		legacy_total_score: {type: DataTypes.BIGINT, defaultValue: BigInt(0), allowNull: false},
		max_combo: {type: DataTypes.INTEGER, allowNull: false},
		pp: {type: DataTypes.FLOAT, defaultValue: 0, allowNull: false},
		mods: {type: DataTypes.STRING, defaultValue: 'No Mods', allowNull: false},
		passed: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
		ranked: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
		best: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
		count_meh: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_ok: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_great: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		count_miss: {type: DataTypes.INTEGER, defaultValue:0, allowNull: false},
		is_fc: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
		legacy_is_fc: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
	});
	
	return model;
	
}