import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const guild_service_tracking = (connection: Sequelize) => {

	const model = define_model(connection, 'guildServicesTracking', {
		guildid: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		platformaction: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		key: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});

	return model;

}