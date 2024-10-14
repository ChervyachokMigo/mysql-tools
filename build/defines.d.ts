import { Sequelize, ModelAttributes, ModelOptions, ModelStatic } from "@sequelize/core";
export type action_model_attribute = {
    name: string;
    attribute: any;
};
export type mysql_action = {
    names: string | string[];
    model: ModelStatic<any>;
    database: string;
    attributes?: action_model_attribute[];
    fileds?: string[];
    keys?: string[];
    non_keys?: string[];
};
export type DATABASES = {
    [key: string]: string;
};
export type MYSQL_CREDENTIALS = {
    DB_HOST?: string;
    DB_PORT?: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DATABASES: DATABASES;
};
export type sequelize_connection = {
    connection: Sequelize;
    name: string;
};
type logging_types = false | ((sql: string, timing?: number | undefined) => void) | undefined;
export declare const prepareDB: (MYSQL_CREDENTIALS: MYSQL_CREDENTIALS, logging?: logging_types) => Promise<sequelize_connection[]>;
export declare const prepareEND: (logging?: logging_types, alter?: boolean) => Promise<void>;
export declare const get_connection: (DB_NAME: string) => sequelize_connection | undefined;
export declare const add_model_names: (action: mysql_action) => number;
export declare const define_model: (connection: Sequelize, names: string | string[], fields?: ModelAttributes, options?: ModelOptions) => ModelStatic<any>;
export declare const get_models_names: () => (string | string[])[];
export declare const find_model: (name: string) => mysql_action;
export declare const get_attributes_types: (name: string) => any[];
export declare const select_mysql_model: (action: string | null) => ModelStatic<any>;
export {};
//# sourceMappingURL=defines.d.ts.map