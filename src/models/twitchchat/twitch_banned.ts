import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const twitch_banned = (connection: Sequelize) => {

	const model = define_model(connection, 'twitch_banned', {
		channelname: {type: DataTypes.STRING, allowNull: false}
	});

	return model;

}