export interface List {
    payments: Array<Row>;
    ref: string;
    currency: string;
}

export interface Row {
    codePackage: number;
    date: string;
    import: number;
    bill: string;
}
