import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const cryptopairs = (connection: Sequelize) => {

	const model = define_model(connection, 'cryptopairs', {
		first: {type: DataTypes.STRING, allowNull: false},
		second: {type: DataTypes.STRING, allowNull: false},
		value: {type: DataTypes.DOUBLE, defaultValue: 0.0},
		value_change: {type: DataTypes.DOUBLE, defaultValue: 0.0},
		is_online: {type: DataTypes.BOOLEAN, defaultValue: false},
		last_update: {type: DataTypes.DATE, defaultValue: new Date(0), allowNull: false}
	});

	return model;

}