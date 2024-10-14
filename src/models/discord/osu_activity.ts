import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const osu_activity = (connection: Sequelize) => {

	const model = define_model(connection, 'osuactivity', {
		activityid: {type: DataTypes.BIGINT,  defaultValue: 0, allowNull: false},
		date: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		type: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
	});

	return model;

}