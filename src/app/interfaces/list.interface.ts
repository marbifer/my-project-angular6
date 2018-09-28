export interface List {
    payments: Array<Row>;
}

export interface Row {
    codePackage: number;
    date: string;
    import: number;
    bill: string;
}
