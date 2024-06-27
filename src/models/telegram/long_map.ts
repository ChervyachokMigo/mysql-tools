import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const long_map = (connection: Sequelize) => {

	//const model = define_model(connection, 'long_map', {
	const model = define_model(connection, 'map_too_longs', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	return model;

}