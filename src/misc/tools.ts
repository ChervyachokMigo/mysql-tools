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