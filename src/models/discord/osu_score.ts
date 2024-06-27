import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const osu_score = (connection: Sequelize) => {

	const model = define_model(connection, 'osuscore', {
		scoreid: {type: DataTypes.BIGINT,  defaultValue: 0, allowNull: false},
		date: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		username: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		gamemode: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		mapsetid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		mapid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		score300: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		score100: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		score50: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		score0: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		artist: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		title: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		diff: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		pp: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		acc: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		rank: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		mods: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});

	return model;

}