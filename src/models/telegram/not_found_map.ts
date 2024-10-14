import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const not_found_map = (connection: Sequelize) => {

	const model = define_model(connection, 'not_found_map', {
	//const model = define_model(connection, 'bancho_not_founds', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	return model;

}