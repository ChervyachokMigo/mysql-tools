import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const vk_friend = (connection: Sequelize) => {

	const model = define_model(connection, 'vkfriend', {
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		friendid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
	});
	
	return model;

}