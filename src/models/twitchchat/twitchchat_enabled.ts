import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const twitchchat_enabled = (connection: Sequelize) => {

	const model = define_model(connection, 'twitchchat_enabled', {
		channelname: {type: DataTypes.STRING, allowNull: false}
	});

	return model;

}