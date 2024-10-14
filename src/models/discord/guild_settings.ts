import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const guild_settings = (connection: Sequelize) => {

	const model = define_model(connection, 'guildSettings', {
		guildid: {type: DataTypes.BIGINT, defaultValue: 0, allowNull: false},
		settingname: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
		value: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
	});

	return model;

}