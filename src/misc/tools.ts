import { existsSync, mkdirSync } from "node:fs";

export const folder_prepare = ( folder_path: string ) => {
	try {
		if ( !existsSync( folder_path )) 
			mkdirSync( folder_path, { recursive: true }); 
		return true;
	} catch (e) {
		console.error( 'Cannot create folder:', folder_path );
		console.error(e);
		return false;
	}
}

export const split_array_on_chunks = ( arr: any[], len?: number ) => {
	if (typeof len === 'undefined' || len === 0) {
		return arr;
	}

	if (!Array.isArray(arr)){
		throw new Error('split_array > array is not the object');
	}

	let chunks = [];
	let i = 0;

	while (i < arr.length) {
		chunks.push(arr.slice(i, i += len));
	}

	return chunks;
}