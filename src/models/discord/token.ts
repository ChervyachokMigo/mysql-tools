import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const token = (connection: Sequelize) => {

	const model = define_model(connection, 'token', {
		value: {type: DataTypes.TEXT,  defaultValue: '', allowNull: false},
		platform: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		getdate: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		expires: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		type: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});

	return model;

}