import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const vk_user = (connection: Sequelize) => {

	const model = define_model(connection, 'vkuser', {
		tracking: {type: DataTypes.BOOLEAN,  defaultValue: true, allowNull: false},
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		online: {type: DataTypes.BOOLEAN,  defaultValue: true, allowNull: false},
		name1: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		name2: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		lastactive: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		statustext: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		followers: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		friends: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		friendsTracking:  {type: DataTypes.BOOLEAN,  defaultValue: false, allowNull: false},
	});
	
	return model;

}