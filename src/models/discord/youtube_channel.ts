import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const youtube_channel = (connection: Sequelize) => {

	const model = define_model(connection, ['youtubeChannelsData', 'youtubechannel'], {
		channelid: {type: DataTypes.STRING,  defaultValue: ``, unique: true, allowNull: false},
		channelname: {type: DataTypes.STRING, defaultValue: ``, allowNull: false},
		icons_default:  {type:DataTypes.STRING, defaultValue: ``, allowNull: false},
		icons_medium:  {type:DataTypes.STRING, defaultValue: ``, allowNull: false},
		icons_high: {type: DataTypes.STRING, defaultValue: ``, allowNull: false},
		creation_date: {type: DataTypes.INTEGER, defaultValue: 0, allowNull: false},
		updoads_playlistid:{type: DataTypes.STRING, defaultValue: ``, allowNull: false},
		tracking: {type: DataTypes.BOOLEAN,  defaultValue: true, allowNull: false},
	});

	return model;

}