import { Sequelize, DataTypes } from "sequelize";
import { define_model } from "../../defines";

export const reacion_role = (connection: Sequelize) => {

	const model = define_model(connection, 'reactionrole', {
		guildid: { type: DataTypes.STRING, unique: `message`, allowNull: false },
		messageid: { type:DataTypes.STRING, unique: `message`, allowNull: false },
		emoji: { type:DataTypes.STRING, unique: `message`, allowNull: false },
		emojitype: { type:DataTypes.STRING, allowNull: false },
		roleid: { type:DataTypes.STRING, allowNull: false },
	});
	
	return model;

}