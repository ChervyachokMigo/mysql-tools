import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const custom_commands = (connection: Sequelize) => {

	const model = define_model(connection, 'custom_commands', {
		name: {type: DataTypes.STRING, allowNull: false, unique: true},
		channelname: {type: DataTypes.STRING, allowNull: false},
		text: {type: DataTypes.STRING, allowNull: false, defaultValue: ''},
		perm: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 1}
	});

	return model;

}