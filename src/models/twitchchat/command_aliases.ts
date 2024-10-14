import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const command_aliases = (connection: Sequelize) => {

	const model = define_model(connection, 'command_aliases', {
		id: {type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true},
		name: {type: DataTypes.STRING, allowNull: false}
	});

	return model;

}