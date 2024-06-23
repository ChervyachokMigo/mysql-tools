export type CSV_PARAMS = {
    folder_path: string;
    tablename: string;
    string_quotes: string;
    separator: string;
};
export declare const export_table_csv: (csv_params: CSV_PARAMS) => Promise<false | undefined>;
//# sourceMappingURL=export_table_csv.d.ts.map