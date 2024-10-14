import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const twitch_clips = (connection: Sequelize) => {

	const model = define_model(connection, 'twitchclips', {
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		clipid: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});
	
	return model;

}