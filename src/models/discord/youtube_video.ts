import { Sequelize, DataTypes } from "@sequelize/core";
import { define_model } from "../../defines";

export const youtube_video = (connection: Sequelize) => {

	const model = define_model(connection, ['youtubeVideosData', 'youtubevideos'], {
		videoid: {type: DataTypes.STRING, defaultValue: '0', unique: true, allowNull: false},
		videotitle: {type: DataTypes.STRING, defaultValue: '', allowNull: false},
		preview_default:  {type:DataTypes.STRING, defaultValue: ``, allowNull: false},
		preview_medium:  {type:DataTypes.STRING, defaultValue: ``, allowNull: false},
		preview_high: {type: DataTypes.STRING, defaultValue: ``, allowNull: false},
		date:  {type:DataTypes.INTEGER, defaultValue: 0, allowNull: false},
	});

	return model;

}