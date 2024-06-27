import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const osu_replay_cache = (connection: Sequelize) => {

	const model = define_model(connection, ['osureplaycache', 'replaycache'], {
		replay_md5: {type: DataTypes.STRING,  unique: true, defaultValue: '', allowNull: false},
		replayJSONdata: {type: DataTypes.JSON,  defaultValue: '', allowNull: false},
	});

	return model;

}