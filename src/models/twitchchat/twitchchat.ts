import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const twitchchat = (connection: Sequelize) => {

	const model = define_model(connection, 'twitchchat', {
		username: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		tracking: {type: DataTypes.BOOLEAN,  defaultValue: true, allowNull: false},
	});
	
	return model;

}