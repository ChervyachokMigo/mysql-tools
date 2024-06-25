import { split_array_on_chunks } from "../misc/tools";

import fs from "fs";

import { MYSQL_SAVE } from "../base";
import { find_model } from "../defines";


export const load_csv = ( filepath: string ) => {

	if ( !fs.existsSync(filepath)){
		throw new Error('no csv file at '+ filepath);
	}

	try{

		const data = fs.readFileSync( filepath, { encoding: 'binary' }).toString().split('\r\n');

		const string_quotes = (data.shift() as string).replace('string_quotes:', '');
		const separator = (data.shift() as string).replace('separator:', '');
		const header = (data.shift() as string).replace(/"/gui, '').split(separator);
		const types = (data.shift() as string).split(separator);

		const string_reg = new RegExp( `([0-9.,]+)|${string_quotes}(.*?)${string_quotes}`, 'gui');
		const replace_reg = new RegExp( string_quotes, 'gui');

		if (data.length === 0) {
			return [];
		}

		return data.map( x => {
			const str = x.match( string_reg );

			if (str) {
				return str.map( (y, i) => {
					
					if (types[i].startsWith('INT') || types[i].startsWith('FLOAT') || types[i].startsWith('TINYINT')) {
						return Number(y);

					} else if (types[i].startsWith('BIGINT')) {
						return BigInt(y);

					} else {
						//if (types[i].startsWith('VARCHAR')
						return y.replace( replace_reg , '' );
					}
					
				});
			} else {
				return null;

		}}).map( x => {
			if (x === null){
                return null;
            }

			return Object.fromEntries( x.map( (y, i) => [header[i], y] ) )
			
		}).filter( x => x !== null );

	} catch (e: any){
		throw new Error(e);
	}
}

export const import_table_csv = async ( filepath: string, tablename: string, chunk_size = 500 ) => {

	if (!tablename || !find_model(tablename)) {
		return { 
			error: 'tablename invalid', 
			action: tablename 
		};
	}

	console.log('importing', tablename);

	const content_objects = load_csv( filepath );

	const chunks = split_array_on_chunks( content_objects, chunk_size);

	let count = 0;

	for (let chunk of chunks){
		count += chunk.length;
		await MYSQL_SAVE(tablename, chunk);
	}

	return { 
		success: true,
		action: tablename
	};
	
}