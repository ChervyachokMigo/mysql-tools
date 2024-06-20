import { Sequelize, ModelStatic } from '@sequelize/core';
type mysql_action = {
    names: string | string[];
    model: ModelStatic<any>;
};
type MYSQL_CREDENTIALS = {
    DB_USER: string;
    DB_PASSWORD: string;
    DB_HOST: string;
    DB_PORT: number;
    DATABASES: string[];
};
export declare const prepareDB: (MYSQL_CREDENTIALS: MYSQL_CREDENTIALS, alter?: boolean, logging?: boolean) => Promise<Sequelize[]>;
export declare const add_model_names: (action: mysql_action) => number;
export declare const select_mysql_model: (action: string | null) => ModelStatic;
export {};
//# sourceMappingURL=defines.d.ts.map