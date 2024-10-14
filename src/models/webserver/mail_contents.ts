import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const mail_contents = (connection: Sequelize) => {

	const model = define_model(connection, 'mail_contents', {
		unique_key: {type: DataTypes.STRING, allowNull: false, unique: true}, 
		addressee: {type: DataTypes.STRING, allowNull: false}, 
		from: {type: DataTypes.STRING, allowNull: false},
		subject: {type: DataTypes.STRING, allowNull: false, defaultValue: ''},
		html: {type: DataTypes.TEXT({length: "long"}), allowNull: true },
		text: {type: DataTypes.TEXT({length: "long"}), allowNull: true },
		textAsHtml: {type: DataTypes.TEXT({length: "long"}), allowNull: true },
		date: {type: DataTypes.DATE, allowNull: false},
		opened: {type: DataTypes.BOOLEAN, defaultValue: false}
	});

	return model;

}