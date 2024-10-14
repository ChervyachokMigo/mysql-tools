import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const osu_hunter_tracking = (connection: Sequelize) => {

	const model = define_model(connection, 'osuHunterTrackingUser', {
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		lastUpdated: {type: DataTypes.DATEONLY, allowNull: false},    
	});

	return model;

}