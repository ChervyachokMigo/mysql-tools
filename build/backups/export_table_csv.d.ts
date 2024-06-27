export type CSV_PARAMS = {
    folder_path: string;
    tablename: string;
    string_quotes?: string;
    separator?: string;
};
export declare const save_csv: (csv_params: CSV_PARAMS, values?: string[], print_frequerency?: number) => void;
export declare const export_table_csv: (csv_params: CSV_PARAMS) => Promise<string>;
//# sourceMappingURL=export_table_csv.d.ts.map