import { MYSQL_GET_ALL } from "../base";
import { find_model, get_attributes_types, prepareDB } from "../defines";

import { writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { folder_prepare } from "../misc/tools";

type CSV_PARAMS = {
	folder_path: string,
    tablename: string,
    string_quotes: string,
    separator: string,
}

const save_csv = (csv_params: CSV_PARAMS, values: string[] = []) => {

	const {folder_path = '', tablename, string_quotes = '"', separator = ';'} = csv_params;

	folder_prepare (folder_path);

	if (values && Array.isArray(values) && values.length > 0){
		console.log('preparing data');
		const now = new Date();
		const filename =  `${tablename}-${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}-` +
			`${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

		const header = Object.keys(values[0]).map( x => `"${x}"` ).join(separator);
		const types = get_attributes_types(tablename as string).join(separator);

		let data = [];
		data.push( 'string_quotes:' + string_quotes );
		data.push( 'separator:' + separator );
		data.push( header );
		data.push( types );

		for ( let i = 0; i < values.length; i++ ){
			if (values.length > 99) {
				if (i % Math.trunc(values.length / 100) == 0) {
					console.log( `processed "${tablename}" ${(i/values.length).toFixed(0)}%` );
				}
			} else {
				console.log( `processed "${tablename}" ${(i/values.length).toFixed(0)}%` );
			}

			data.push( Object.values(values[i]).map( x => 
				typeof x === 'string' ? `${string_quotes}${x}${string_quotes}` : x ).join(separator) );

		}

		try {
			console.log('saving csv');
			writeFileSync(path.join( folder_path, filename + '.csv' ), data.join('\r\n'), { encoding: 'utf8' });
		} catch (e) {
			console.error(e);
		}
	} else {
		console.error('save_csv > no values');
	}
}


export const export_table_csv = async ( csv_params: CSV_PARAMS ) => {

		const {tablename = null} = csv_params;

		if (!tablename || typeof find_model(tablename) === 'undefined') {
			console.error('tablename invalid', tablename);
			return false;
		}

		console.log('geting all data');
		const values = await MYSQL_GET_ALL({ action: tablename });

		console.log('recived', values.length, 'rows');

		save_csv(csv_params, values);

	}

