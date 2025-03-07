import { CreationAttributes, FindAttributeOptions, Order, WhereOptions } from "@sequelize/core";
export declare const MYSQL_GET_ONE: (action?: string | null, condition?: {}) => Promise<any>;
export type GET_ALL_PARAMS = {
    action: string | null;
    params?: WhereOptions;
    attributes?: FindAttributeOptions;
    limit?: number;
    order?: Order;
};
export declare const MYSQL_GET_ALL: (PARAMS: GET_ALL_PARAMS) => Promise<any[]>;
export declare const MYSQL_UPDATE: (action?: string | null, condition?: WhereOptions, values?: any) => Promise<[affectedCount: number]>;
export declare const MYSQL_DELETE: (action?: string | null, condition?: WhereOptions) => Promise<number | undefined>;
export declare const MYSQL_SAVE: (action: string | null | undefined, values: CreationAttributes<any> | ReadonlyArray<any>, ignore_duplicates?: boolean) => Promise<any>;
//# sourceMappingURL=base.d.ts.map