import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const trovo_user = (connection: Sequelize) => {

	const model = define_model(connection, ['trovodata', 'streamersTrovo'], {
		userid: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		username: {type: DataTypes.STRING, unique: true, allowNull: false},
		tracking: {type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false},
		followers: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		status:  {type:DataTypes.STRING, defaultValue: `offline`, allowNull: false},
		title:  {type:DataTypes.STRING, defaultValue: ``, allowNull: false},
		cat:  {type:DataTypes.STRING, defaultValue: ``, allowNull: false},
		followersTracking: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
		records: {type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
	});
	
	return model;

}