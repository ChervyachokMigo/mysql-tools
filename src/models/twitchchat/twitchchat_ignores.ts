import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const twitchchat_ignores = (connection: Sequelize) => {

	const model = define_model(connection, 'twitchchat_ignores', {
		channelname: {type: DataTypes.STRING, allowNull: false}
	});

	return model;

}