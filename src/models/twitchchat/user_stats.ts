import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const user_stats = (connection: Sequelize) => {

	const model = define_model(connection, 'user_stats', {
		userid: {type: DataTypes.STRING, allowNull: false, unique: true, primaryKey: true },
		username: {type: DataTypes.STRING, allowNull: false},
		usercolor:  {type: DataTypes.STRING, allowNull: false},
		messagescount: {type: DataTypes.INTEGER, defaultValue: 0},
		charscount: {type: DataTypes.INTEGER, defaultValue: 0},
		joinscount: {type: DataTypes.INTEGER, defaultValue: 0},
	});
	
	return model;

}