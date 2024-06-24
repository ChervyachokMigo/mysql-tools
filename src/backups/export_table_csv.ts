import { MYSQL_GET_ALL } from "../base";
import { find_model, get_attributes_types, prepareDB, select_mysql_model } from "../defines";

import { writeFileSync } from 'node:fs';
import * as path from 'node:path';
import { folder_prepare } from "../misc/tools";

export type CSV_PARAMS = {
	folder_path: string,
    tablename: string,
    string_quotes: string,
    separator: string,
}

const save_csv = (csv_params: CSV_PARAMS, values: string[] = [], print_frequerency = 2) => {

	const {folder_path = '', tablename, string_quotes = '"', separator = ';'} = csv_params;

	folder_prepare (folder_path);


	if (values && Array.isArray(values) && values.length > 0){
		console.log('preparing data');
		
		const database_name = find_model( Array.isArray(tablename) ? tablename[0] : tablename )?.database;
		const now = new Date();
		const filename =  `${database_name}-${tablename}-${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}-` +
			`${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;

		const header = Object.keys(values[0]).map( x => `"${x}"` ).join(separator);
		const types = get_attributes_types(tablename as string).join(separator);

		let data = [];
		data.push( 'string_quotes:' + string_quotes );
		data.push( 'separator:' + separator );
		data.push( header );
		data.push( types );

		for ( let i = 0; i < values.length; i++ ){
			if (values.length >= print_frequerency) {
				if (i % Math.trunc(values.length / print_frequerency) == 0) {
					console.log( `processed "${tablename}" ${(i/values.length*100).toFixed(0)}%` );
				}
			} else {
				console.log( `processed "${tablename}" ${(i/values.length*100).toFixed(0)}%` );
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

		const action = Array.isArray(tablename) ? tablename[0] : tablename;

		if (!action || !find_model(action)) {
			return { 
				error: 'tablename invalid', 
				action 
			};
		}

		console.log('geting all data from', action);
		const values = await MYSQL_GET_ALL({ action });

		console.log('recived', values.length, 'rows');

		save_csv(csv_params, values);

		return { 
            success: values.length,
            action 
        };
	}

