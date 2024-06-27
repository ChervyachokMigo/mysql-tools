
import { CreationAttributes, FindAttributeOptions, Literal, Order, UpdateValues, UpsertOptions, WhereOptions } from "@sequelize/core";
import { select_mysql_model } from "./defines";
import { Nullish } from "@sequelize/core/types/utils/types";

export const MYSQL_GET_ONE = async (action: string | null = null, condition: WhereOptions = {} ) => {
	const MysqlModel = select_mysql_model(action);

	try {
		return await MysqlModel.findOne({ where: condition , logging: false, raw: true });
	} catch (e: any){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}
}

export type GET_ALL_PARAMS = {
	action: string | null;
	params?: WhereOptions;
	attributes?: FindAttributeOptions;
	limit?: Nullish<number | Literal>;
	order?: Order
}

export const MYSQL_GET_ALL = async ( PARAMS: GET_ALL_PARAMS ) => {

	//Set default values
	const {action = null, params = {}, attributes = undefined, limit = null, order = undefined} = PARAMS;

	const MysqlModel = select_mysql_model(action);

	try{
		return await MysqlModel.findAll ({ where: params, logging: false, raw: true, attributes, limit, order });
	} catch (e: any){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			console.error( 'action', action, 'params', params, 'attributes', attributes );
			throw new Error(e);
		}
	}    
}

export const MYSQL_UPDATE = async ( action: string | null = null, condition: WhereOptions = {}, values: UpdateValues<any> = {} ) => {

	const MysqlModel = select_mysql_model(action);

	if (!condition || Object.keys(values).length == 0) {
		throw new Error(`DB: (mysql update) undefined condition`);
	}

	if (!values || Object.keys(values).length == 0) {
		throw new Error(`DB: (mysql update) undefined values`);
	}

	try{
		return await MysqlModel.update(values, { where: condition, logging: false });
	} catch (e: any){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}    
}

export const MYSQL_DELETE = async ( action: string | null = null, condition: WhereOptions = {} ) => {

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
	} catch (e: any){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			console.error('can not delete', action, condition);
		}
	}   
}

export const MYSQL_SAVE = async ( action: string | null = null, values: CreationAttributes<any> | ReadonlyArray<any>, ignore_duplicates = true ) => {
	const MysqlModel = select_mysql_model(action);

	try {
		if (typeof values.length !== 'undefined' && values.length > 0){
			return await MysqlModel.bulkCreate(values as ReadonlyArray<any>, { logging: false, ignoreDuplicates: ignore_duplicates })
		} else {
			return (await MysqlModel.upsert(values as CreationAttributes<any>, { logging: false })).shift();
		}
	} catch (e: any){
		if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
			throw new Error(`Нет доступа к базе данных.`);
		} else {
			throw new Error(e);
		}
	}       
}