import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const mail_ignores = (connection: Sequelize) => {

	const model = define_model(connection, 'mail_ignores', {
		email_name: {type: DataTypes.STRING, allowNull: false, unique: true}, 
	});

	return model;

}