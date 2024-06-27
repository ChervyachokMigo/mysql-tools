import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const user = (connection: Sequelize) => {

	const model = define_model(connection, ['user', 'daily'], {
		guildid: { type: DataTypes.STRING, unique: `guilduser`, allowNull: false },
		userid: { type:DataTypes.STRING, unique: `guilduser`, allowNull: false },
		restricted: {type: DataTypes.BOOLEAN, defaultValue: false },
		coins: { type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
		lastdaily: { type: DataTypes.DATE, allowNull: false },
		dailynotified: { type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
	});
	
	return model;

}