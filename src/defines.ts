import { createConnection } from 'mysql2/promise';
import { Sequelize, ModelStatic } from '@sequelize/core';

type mysql_action = {
	names: string | string[],
    model: ModelStatic<any>,
}

type MYSQL_CREDENTIALS = {
    DB_HOST: string,
    DB_PORT: number,
	DB_USER: string,
    DB_PASSWORD: string,
    DATABASES: string[],
}

const sequelize_connections: Sequelize[] = [];
const mysql_actions: mysql_action[] = [];

export const prepareDB = async ( MYSQL_CREDENTIALS: MYSQL_CREDENTIALS, logging = false ) => {

	const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;

	console.log('[База данных]', 'Подготовка баз данных');
	try {
		const connection = await createConnection(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`);
		const results = [];
		if (DATABASES && typeof DATABASES.length !== 'undefined' && DATABASES.length > 0){
			for (let DB_NAME of DATABASES){
				await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
				const sequelize_connection = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, { 
					dialect: 'mysql',
					define: {
						updatedAt: false,
						createdAt: false,
						deletedAt: false
					},
					logging,
				});
				results.push(sequelize_connection);
				sequelize_connections.push(sequelize_connection);
			}			
			await connection.end();
			console.log('[База данных]', 'Подготовка завершена');
			return results;
		} else {
			throw new Error('[База данных] DATABASES не установлены');
		}

	} catch (e: any){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error('Нет доступа к базе');
		} else {
			throw new Error(`ошибка базы: ${e}`);
		}
	}
}

export const prepareEND = async (logging = false, alter = false) => {
	for (let sequelize_connection of sequelize_connections) {
		await sequelize_connection.sync({ logging, alter });
	}
}

export const add_model_names = (action: mysql_action) => mysql_actions.push(action);

export const select_mysql_model = (action: string | null): ModelStatic => {

	const MysqlModel = mysql_actions.find ( model => {
		if (typeof model.names === 'string'){
			return model.names === action;
		} else if (typeof model.names === 'object') {
			return model.names.findIndex( val => val === action) > -1;
		} else {
			return false;
		}
	});

	if ( !MysqlModel || !action ){
		console.error('[База данных]', '(select_mysql_model)', `undefined action: ${action}`);
		throw new Error(`unknown mysql model: ${action}`);
	}

	return MysqlModel.model;
}
