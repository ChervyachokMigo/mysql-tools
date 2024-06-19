
import { select_mysql_model } from "./defines";

export const MYSQL_GET_ONE = async (action, condition) => {
	const MysqlModel = select_mysql_model(action);

	try {
		return await MysqlModel.findOne({ where: condition , logging: false, raw: true });
	} catch (e){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}
}

    
export const MYSQL_GET_ALL = async ({ action, params = {}, attributes = undefined, limit = null, order = null }) => {
	const MysqlModel = select_mysql_model(action);

	try{
		return await MysqlModel.findAll ({ where: params, logging: false, raw: true, attributes, limit, order });
	} catch (e){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}    
}

export const MYSQL_UPDATE = async (action, condition = null, values = {}) => {
	const MysqlModel = select_mysql_model(action);

	if (!condition) {
		throw new Error(`DB: (mysql update) undefined condition`);
	}

	if (!values) {
		throw new Error(`DB: (mysql update) undefined values`);
	}

	try{
		return await MysqlModel.update(values, { where: condition, logging: false });
	} catch (e){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}    
}

export const MYSQL_DELETE = async (action, condition = null) => {
	const MysqlModel = select_mysql_model(action);

	if (!condition) {
		throw new Error(`DB: (mysql delete) нет условия`);
	}

	if (Object.keys(condition).length == 0) {
		throw new Error(`DB: (mysql delete) условие для удаления всей таблицы ${action}`);
	}

	try{
		return await MysqlModel.destroy({
			where: condition, logging: false
		});
	} catch (e){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			console.error('can not delete', action, condition);
		}
	}   
}

export const MYSQL_SAVE = async ( action, condition, values, ignore_duplicates = true ) => {
	const MysqlModel = select_mysql_model(action);

	if ( !condition || (Object.keys(condition).length == 0) ){
		throw new Error(`DB: (mysql save) отсутствует условия для сохранения, таблица ${action}`);
	}

	if ( condition && Object.keys(condition).length > 0 ){
		values = {...values, ...condition};
	}

	try {
		if (typeof values.length !== 'undefined' && values.length > 0){
			return await MysqlModel.bulkCreate(values, { logging: false, ignoreDuplicates: ignore_duplicates })
		} else {
			return (await MysqlModel.upsert(values, { where: condition, logging: false, raw: true })).shift();
		}
	} catch (e){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}       
}