import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const osu_replay_attachment = (connection: Sequelize) => {

	const model = define_model(connection, ['osureplayattachment', 'replayattachment'], {
		imageid: {type: DataTypes.BIGINT,  unique: true, defaultValue: 0, allowNull: false},
		userid: {type: DataTypes.BIGINT,  defaultValue: 0, allowNull: false},
		beatmap_md5: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		replay_md5: {type: DataTypes.STRING,  defaultValue: '', allowNull: false},
		time: {type: DataTypes.INTEGER,  defaultValue: 0, allowNull: false},
		zoom: {type: DataTypes.INTEGER,  defaultValue: 400, allowNull: false},
	});

	return model;

}