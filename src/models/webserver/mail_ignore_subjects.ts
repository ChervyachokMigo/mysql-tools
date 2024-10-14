import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const mail_ignore_subjects = (connection: Sequelize) => {

	const model = define_model(connection, 'mail_ignore_subjects', {
		subject: {type: DataTypes.STRING, allowNull: false, unique: true}, 
	});

	return model;

}