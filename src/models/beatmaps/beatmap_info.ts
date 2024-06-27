import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const beatmap_info = (connection: Sequelize) => {

	const model = define_model(connection, 'beatmap_info', {
		md5: {type: DataTypes.INTEGER,allowNull: false, unique: true, primaryKey: true},
		artist: {type: DataTypes.STRING, allowNull: false},
		title: {type: DataTypes.STRING, allowNull: false},
		creator: {type: DataTypes.STRING, allowNull: false},
		difficulty: {type: DataTypes.STRING, allowNull: false},
	}, {noPrimaryKey: false});

	return model;
	
}