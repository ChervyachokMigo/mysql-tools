import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const download_map = (connection: Sequelize) => {

	const model = define_model(connection, 'download_map', {
	//const model = define_model(connection, 'maps_to_downloads', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	return model;

}