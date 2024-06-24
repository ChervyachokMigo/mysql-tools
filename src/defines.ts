import { createConnection } from 'mysql2/promise';
import { Sequelize, ModelStatic, ModelAttributes, ModelOptions } from '@sequelize/core';

type action_model_attribute = {
	name: string, 
	attribute: any
}

type mysql_action = {
	names: string | string[],
    model: ModelStatic<any>,
	database: string,
	attributes?: action_model_attribute[],
	fileds?: string[],
	keys?: string[],
	non_keys?: string[]
}

type MYSQL_CREDENTIALS = {
    DB_HOST?: string,
    DB_PORT?: number,
	DB_USER: string,
    DB_PASSWORD: string,
    DATABASES: string[],
}

type sequelize_connection = {
	connection: Sequelize,
	name: string
}

const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 3306;

const sequelize_connections: sequelize_connection[] = [];
const mysql_actions: mysql_action[] = [];

/** 
* @param {Model} Model Execute model
* @param {Boolean} all If true get all fields, else get only non-primary keys or only primary keys
* @param {Boolean} primary If true get only primary keys, else get only non-primary keys
* @return {Array} Array of fields of Model
*/
const get_model_field_list = async (model: ModelStatic<any>, model_list: {all?: boolean, primary?: boolean} ) => {
	const {all= false, primary = false} = model_list;

	return await Promise.all(Object.entries(await model.describe())
		// eslint-disable-next-line no-unused-vars
		.filter( ([key, value]) => all ? true : primary ? value.primaryKey : !value.primaryKey )
		// eslint-disable-next-line no-unused-vars
		.map( ([key, value]) => key ));
};

const check_connect = async (MYSQL_CREDENTIALS: MYSQL_CREDENTIALS) => {
	console.log('[База данных]', 'Проверка соединения');
	const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;

	try {			
		const connection = await createConnection(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST || DEFAULT_HOST}:${DB_PORT || DEFAULT_PORT}`);

		for (let DB_NAME of DATABASES){
			await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\`;`);
		}			
		await connection.end();

		return true;
	} catch (e: any){
		console.error('проверьте правильность данных\n');
		
		Object.entries(MYSQL_CREDENTIALS).forEach( ([key, val]) => !val? 
			console.log( `${key}: Ошибка: отсутствует значение\n`) : null );

		if (e.code === 'ECONNREFUSED'){
			console.error('База данных', 'ошибка соединения', 'Нет доступа к базе');
		} else {
			console.error('База данных', 'ошибка базы', e );
		}

		return false;
	}
}

export const prepareDB = async ( MYSQL_CREDENTIALS: MYSQL_CREDENTIALS, logging = false ) => {

	const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES } = MYSQL_CREDENTIALS;

	console.log('[База данных]', 'Подготовка баз данных');

	if ( !(await check_connect(MYSQL_CREDENTIALS)) ){
		throw new Error('Нет доступа к базе');
	}

	try {
		const results:Sequelize[] = [];
		if (DATABASES && typeof DATABASES.length !== 'undefined' && DATABASES.length > 0){
			for (let DB_NAME of DATABASES){
				
				const sequelize_connection = new Sequelize( DB_NAME, DB_USER, DB_PASSWORD, { 
					host: DB_HOST || DEFAULT_HOST,  
					port: DB_PORT || DEFAULT_PORT,
					dialect: 'mysql',
					define: {
						updatedAt: false,
						createdAt: false,
						deletedAt: false
					},
					logging,
					pool: {
						max: 30,
						min: 0,
						acquire: 60000,
						idle: 60000
					},
					noTypeValidation: true, 
				});
				results.push(sequelize_connection);
				sequelize_connections.push({ connection: sequelize_connection, name: DB_NAME });
			}

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
		await sequelize_connection.connection.sync({ logging, alter });
	}
	await Promise.all( mysql_actions.map( async ({ names, model }, i, a) => {
		a[i].attributes = Object.entries(await a[i].model.describe()).map( ([name, attribute ]) => ({ name, attribute }) );
		a[i].fileds = await get_model_field_list( model, {all: true} );
		a[i].keys = await get_model_field_list( model, {primary: true} );
		a[i].non_keys = (a[i].fileds as string[]).filter( v =>!(a[i].keys as string[]).includes( v ) );
	}));
	console.log('[База данных]', 'Подготовка завершена');
}

export const get_connection = (DB_NAME: string) => sequelize_connections.find( x => x.name === DB_NAME );

export const add_model_names = (action: mysql_action) => mysql_actions.push(action);

export const define_model = (connection: Sequelize, names: string | string[], fields?: ModelAttributes<any>, options?: ModelOptions<any> ) => {
	
	const names_lowcase =  Array.isArray(names) ? names.map( x => x.toLocaleLowerCase()) : names.toLocaleLowerCase();

	const model_name = Array.isArray(names_lowcase) ? names_lowcase[0] : names_lowcase;
	
	const founded_model = mysql_actions.find( x => {
		if (Array.isArray(x.names)){
			if (Array.isArray(names_lowcase)){
				return x.names.findIndex( y => names_lowcase.findIndex( z => z === y) > -1) > -1;
			} else {
				return x.names.findIndex( y => names_lowcase === y ) > -1;
			}
		} else {
			if (Array.isArray(names_lowcase)){
				return names_lowcase.findIndex( y => y === x.names ) > -1;
			} else {
				return names_lowcase === x.names;
			}
		}
	});

	if (founded_model) {
		return founded_model.model;
	}

	const model = connection.define(model_name, fields, options);

	add_model_names({ names: names_lowcase, model, database: connection.getDatabaseName() });

	return model;
}

export const get_models_names = () => mysql_actions.map( x => x.names );

export const find_model = (name: string) => {
	const name_lowcase = name.toLocaleLowerCase();

	const MysqlModel = mysql_actions.find ( model => {
		if (Array.isArray(model.names)){
			return model.names.findIndex( val => val === name_lowcase) > -1;
		} else {
			return model.names === name_lowcase;
		}
	});

	if ( !MysqlModel ){
		console.error('[База данных]', '(find_model)', `undefined model: ${name_lowcase}`);
		throw new Error(`unknown mysql model: ${name_lowcase}`);
	}

	return MysqlModel
}

export const get_attributes_types = (name: string) => ((find_model(name) as mysql_action).attributes as action_model_attribute[]).map( x => x.attribute.type);

export const select_mysql_model = (action: string | null): ModelStatic => {

	if (!action) {
		console.error('[База данных]', '(select_mysql_model)', `empty action: ${action}`);
		throw new Error(`unknown mysql model: ${action}`);
	}

	const MysqlModel = find_model(action);
	
	return MysqlModel.model;
}
