import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const user_grade = (connection: Sequelize) => {

	const model = define_model(connection, 'osu_user_grade', {
		userid: {type: DataTypes.INTEGER, allowNull: false, unique: 'user' },
		gamemode: {type: DataTypes.TINYINT, allowNull: false, unique: 'user' },
		score_mode: {type: DataTypes.TINYINT, allowNull: false, unique: 'user' },
		username: {type: DataTypes.STRING, allowNull: false, defaultValue: '' },
		F: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		D: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		C: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		B: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		A: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		S: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		X: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		SH: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		XH: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
	});
	
	return model;
	
}