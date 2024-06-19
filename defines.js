const { createConnection } = require('mysql2/promise');
const { Sequelize } = require('@sequelize/core');

const mysql_actions = [];

module.exports = {

    prepareDB: async ({ DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DATABASES }, alter = false, logging = false) => {
		console.log('[База данных]', 'Подготовка баз данных');
        try {
            const connection = await createConnection(`mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`);
			const results = [];
			if (DATABASES || DATABASES?.length > 0){
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
					await sequelize_connection.sync({ logging, alter });
					results.push(sequelize_connection);
				}			
				await connection.end();
				console.log('[База данных]', 'Подготовка завершена');
				return results;
			} else {
				throw new Error('[База данных] DATABASES не установлены');
			}
        } catch (e){
            if (e.code === 'ECONNREFUSED' || e.name === `SequelizeConnectionRefusedError`){
                throw new Error('Нет доступа к базе');
            } else {
                throw new Error(`ошибка базы: ${e}`);
            }
        }
    },

	add_model_names: (names, model) => mysql_actions.push({ names, model }),

    select_mysql_model: (action) => {
        const MysqlModel = mysql_actions.find ( model => {
            if (typeof model.names === 'string'){
                return model.names === action;
            } else if (typeof model.names === 'object') {
                return model.names.findIndex( val => val === action) > -1;
            } else {
                return false;
            }
        });
    
        if (!MysqlModel){
            console.error('[База данных]', '(select_mysql_model)', `undefined action: ${action}`);
            throw new Error('unknown mysql model', action);
        }
    
        return MysqlModel.model;
    }
}