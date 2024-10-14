import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const trovo_clips = (connection: Sequelize) => {

	const model = define_model(connection, 'trovoclips', {
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		clipid: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});
	
	return model;

}