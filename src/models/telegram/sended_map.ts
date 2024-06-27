import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const sended_map = (connection: Sequelize) => {

	const model = define_model(connection, 'sended_map', {
		beatmapset_id: { type: DataTypes.INTEGER },
	});

	return model;

}