export interface List {
    payments: Array<Row>;
}

export interface Row {
    _id: string;
    codePackage: number;
    date: string;
    import: number;
    bill: string;
    // tslint:disable-next-line:max-line-length
    // Poner acá la referencia  del formulario que no sea visible en la tabla de pagos, pero servirá para hacer el find en el post del controller
}
