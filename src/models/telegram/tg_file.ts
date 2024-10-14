import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const tg_file = (connection: Sequelize) => {

	const model = define_model(connection, 'tg_file', {
		beatmapset_id: {type: DataTypes.INTEGER, allowNull: false, unique: true, primaryKey: true},
		message_id: {type: DataTypes.INTEGER, allowNull: true}
	});

	return model;

}