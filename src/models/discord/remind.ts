import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const remind = (connection: Sequelize) => {

	const model = define_model(connection, 'remind', {
		guildid: { type: DataTypes.STRING, unique: `remind`, allowNull: false },
		userid: { type:DataTypes.STRING, unique: `remind`, allowNull: false },
		text: { type:DataTypes.STRING,  unique: `remind`, allowNull: false },
		time: { type:DataTypes.DATE,  allowNull: false },
		timeMin: { type:DataTypes.INTEGER,  defaultValue: 1 },
		infinity: { type:DataTypes.BOOLEAN,  defaultValue: false },
	});
	
	return model;

}