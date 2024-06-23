import { Sequelize, ModelStatic, ModelAttributes, ModelOptions } from '@sequelize/core';
type action_model_attribute = {
    name: string;
    attribute: any;
};
type mysql_action = {
    names: string | string[];
    model: ModelStatic<any>;
    attributes?: action_model_attribute[];
    fileds?: string[];
    keys?: string[];
    non_keys?: string[];
};
type MYSQL_CREDENTIALS = {
    DB_HOST?: string;
    DB_PORT?: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DATABASES: string[];
};
type sequelize_connection = {
    connection: Sequelize;
    name: string;
};
export declare const prepareDB: (MYSQL_CREDENTIALS: MYSQL_CREDENTIALS, logging?: boolean) => Promise<Sequelize[]>;
export declare const prepareEND: (logging?: boolean, alter?: boolean) => Promise<void>;
export declare const get_connection: (DB_NAME: string) => sequelize_connection | undefined;
export declare const add_model_names: (action: mysql_action) => number;
export declare const define_model: (connection: Sequelize, names: string | string[], fields?: ModelAttributes<any>, options?: ModelOptions<any>) => ModelStatic<any>;
export declare const get_models_names: () => (string | string[])[];
export declare const find_model: (name: string) => mysql_action | undefined;
export declare const get_attributes_types: (name: string) => any[];
export declare const select_mysql_model: (action: string | null) => ModelStatic;
export {};
//# sourceMappingURL=defines.d.ts.map