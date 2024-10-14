import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const osu_profile = (connection: Sequelize) => {

	const model = define_model(connection, 'osuprofile', {
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		username: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		pp: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		rank: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		countryrank: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		acc: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		lastactive: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		online: {type: DataTypes.BOOLEAN,  defaultValue: true, allowNull: false},
		followers: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		tracking: {type: DataTypes.BOOLEAN,  defaultValue: 1, allowNull: false},
		mainmode: {type: DataTypes.STRING,  defaultValue: 'osu', allowNull: false},
		avatar: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});

	return model;

}