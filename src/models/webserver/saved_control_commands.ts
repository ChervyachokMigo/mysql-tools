import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const saved_control_commands = (connection: Sequelize) => {

	const model = define_model(connection, 'savedControlCommands', {
		name: {type: DataTypes.STRING, allowNull: false},
		text: {type: DataTypes.STRING, allowNull: false},
		args: {type: DataTypes.STRING, defaultValue: ''},
	});

	return model;

}