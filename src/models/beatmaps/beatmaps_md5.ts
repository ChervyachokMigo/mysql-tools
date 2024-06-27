import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const beatmap_md5 = (connection: Sequelize) => {

	const model = define_model(connection, 'beatmaps_md5', {
		id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true, unique: true, index: true },
		hash: {type: DataTypes.STRING(32), allowNull: false, unique: true, index: true},
	});

	return model;

}