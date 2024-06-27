import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const nibbers = (connection: Sequelize) => {

	const model = define_model(connection, 'nibbers', {
		userid: {type: DataTypes.BIGINT, unique: true, defaultValue: 0, allowNull: false},
		nibbers: {type: DataTypes.BIGINT, defaultValue: 0, allowNull: false},
	});
	
	return model;

}