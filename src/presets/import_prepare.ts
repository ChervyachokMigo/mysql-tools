import { MYSQL_CREDENTIALS, prepareDB, prepareEND } from "../defines";

import { beatmaps_prepare } from "../preparations/beatmaps";
import { telegram_prepare } from "../preparations/telegram";
import { discord_prepare } from "../preparations/discord";
import { scores_prepare } from "../preparations/scores";
import { twitchchat_prepare } from "../preparations/twitchchat";
import { webserver_prepare } from "../preparations/webserver";

export const import_prepare = async ({ DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES }: MYSQL_CREDENTIALS) => {
	try {
		const MYSQL_CREDENTIALS = { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DATABASES };

		const connections = await prepareDB(MYSQL_CREDENTIALS);

		const beatmaps_connection = 	connections.find( x=> x.name === DATABASES.DB_BEATMAPS 		)?.connection;
		const telegram_connection = 	connections.find( x=> x.name === DATABASES.DB_TELEGRAM_BOT 	)?.connection;
		const discord_connection = 		connections.find( x=> x.name === DATABASES.DB_DISCORD 		)?.connection;
		const twitchchat_connection = 	connections.find( x=> x.name === DATABASES.DB_TWITCHCHAT 	)?.connection;
		const scores_connection = 		connections.find( x=> x.name === DATABASES.DB_SCORES 		)?.connection;
		const webserver_connection = 	connections.find( x=> x.name === DATABASES.DB_WEBSERVER 	)?.connection;
		const tests_connection = 		connections.find( x=> x.name === DATABASES.DB_TESTS 		)?.connection;

		beatmaps_prepare(tests_connection);
		telegram_prepare(tests_connection, tests_connection);
		discord_prepare(tests_connection, tests_connection);
		scores_prepare(tests_connection, tests_connection);
		twitchchat_prepare(tests_connection, tests_connection, tests_connection);
		webserver_prepare(tests_connection);

		await prepareEND();
	} catch (e: any) {
		console.error(e);
		throw new Error(e);
	}

	return true;
}