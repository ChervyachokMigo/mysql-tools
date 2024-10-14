import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const twitch_osu_binds = (connection: Sequelize) => {

	const model = define_model(connection, 'twitch_osu_binds', {
		twitch_id: {type: DataTypes.STRING, allowNull: false},
		twitch_name: {type: DataTypes.STRING, allowNull: false},
		osu_id: {type: DataTypes.INTEGER, allowNull: false},
		osu_name: {type: DataTypes.STRING, allowNull: false}
	});

	return model;

}