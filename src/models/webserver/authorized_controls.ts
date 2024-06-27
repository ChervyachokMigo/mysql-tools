import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const authorized_controls = (connection: Sequelize) => {

	const model = define_model(connection, 'authorizedControls', {
		ip: {type: DataTypes.STRING, allowNull: false},
		token: {type: DataTypes.STRING, allowNull: false},
	});

	return model;

}