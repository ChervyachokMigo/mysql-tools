import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const beatmap_id = (connection: Sequelize) => {

	const model = define_model(connection, 'beatmap_id', {
		md5: {type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true},
		beatmap_id: {type: DataTypes.INTEGER, allowNull: false},
		beatmapset_id: {type: DataTypes.INTEGER, allowNull: false},
		gamemode: {type: DataTypes.TINYINT.UNSIGNED, allowNull: false},
		ranked: {type: DataTypes.TINYINT, allowNull: false},
	});

	return model;
	
}