import { Sequelize, ModelStatic } from '@sequelize/core';
type mysql_action = {
    names: string | string[];
    model: ModelStatic<any>;
    attributes?: {
        name: string;
        attribute: any;
    }[];
    fileds?: string[];
    keys?: string[];
    non_keys?: string[];
};
type MYSQL_CREDENTIALS = {
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DATABASES: string[];
};
export declare const prepareDB: (MYSQL_CREDENTIALS: MYSQL_CREDENTIALS, logging?: boolean) => Promise<Sequelize[]>;
export declare const prepareEND: (logging?: boolean, alter?: boolean) => Promise<void>;
export declare const add_model_names: (action: mysql_action) => number;
export declare const get_models_names: () => (string | string[])[];
export declare const find_model: (name: string) => mysql_action | undefined;
export declare const select_mysql_model: (action: string | null) => ModelStatic;
export {};
//# sourceMappingURL=defines.d.ts.map