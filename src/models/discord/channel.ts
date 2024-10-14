import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const channel = (connection: Sequelize) => {

	const model = define_model(connection, ['botchannel', 'channels_clear'], {
		guildid: { type: DataTypes.STRING, unique: `message`, allowNull: false },
		channeltype: { type: DataTypes.STRING, unique: `message`, allowNull: false },
		channelid: { type:DataTypes.STRING,   allowNull: false }
	});
	
	return model;

}