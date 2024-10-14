import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const steam_user = (connection: Sequelize) => {

	const model = define_model(connection, 'steamuser', {
		tracking: {type: DataTypes.BOOLEAN,  defaultValue: true, allowNull: false},
		steamid: {type: DataTypes.STRING,  defaultValue: 0, allowNull: false},
		onlinestate: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		username: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		lastactive: {type: DataTypes.INTEGER},
		gameid: {type: DataTypes.INTEGER,  defaultValue: 0 },
		gameinfo: {type: DataTypes.STRING,  defaultValue: ''},
		url: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
	});
	
	return model;

}