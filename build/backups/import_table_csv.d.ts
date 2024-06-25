export declare const load_csv: (filepath: string) => ({
    [k: string]: string | number | bigint;
} | null)[];
export declare const import_table_csv: (filepath: string, tablename: string, chunk_size?: number) => Promise<void>;
//# sourceMappingURL=import_table_csv.d.ts.map