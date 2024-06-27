export declare const load_csv: (filepath: string) => {
    [k: string]: string | number | bigint;
}[];
export declare const import_table_csv: (filepath: string, tablename: string, chunk_size?: number) => Promise<{
    error: string;
    action: string;
    success?: undefined;
} | {
    success: boolean;
    action: string;
    error?: undefined;
}>;
//# sourceMappingURL=import_table_csv.d.ts.map