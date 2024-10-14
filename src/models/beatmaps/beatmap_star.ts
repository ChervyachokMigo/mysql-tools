import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const beatmap_star = (connection: Sequelize) => {

	const model = define_model(connection, 'beatmap_star', {
		md5: {type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true},
		local: {type: DataTypes.FLOAT, allowNull: false},
		lazer: {type: DataTypes.FLOAT, allowNull: false},
	});

	return model;

}