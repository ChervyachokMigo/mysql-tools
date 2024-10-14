import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const authorized_mail_users = (connection: Sequelize) => {

	const model = define_model(connection, 'authorizedMailUsers', {
		ip: {type: DataTypes.STRING, allowNull: false},
		token: {type: DataTypes.STRING, allowNull: false},
	});

	return model;

}