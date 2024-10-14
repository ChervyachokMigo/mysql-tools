import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const role = (connection: Sequelize) => {

	const model = define_model(connection, ['role', 'voiceroles_clear', 'voiceroles'], {
		guildid: { type: DataTypes.STRING, unique: `guildrole`, allowNull: false },
		roleid: { type: DataTypes.STRING, unique: `guildrole`, allowNull: false },
		price: { type: DataTypes.INTEGER, defaultValue: -1 },
		chanid: { type:DataTypes.STRING, defaultValue: '0' },
	});
	
	return model;

}