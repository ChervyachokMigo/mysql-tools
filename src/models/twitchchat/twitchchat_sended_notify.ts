import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const twitchchat_sended_notify = (connection: Sequelize) => {

	const model = define_model(connection, 'twitchchat_sended_notify', {
		channelname: {type: DataTypes.STRING, allowNull: false}
	});

	return model;

}