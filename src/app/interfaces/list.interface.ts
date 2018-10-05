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
    // Poner acá la referencia del formulario que no sea visible en la tabla de pagos,
    // pero servirá para hacer el find en el post del controller
}
