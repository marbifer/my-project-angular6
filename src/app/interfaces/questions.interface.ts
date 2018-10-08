export interface ListQuestions {
    questions: Array<Row>;
    catRelationship: string;
}

export interface Row {
    categories: string;
    question: string;
    answer: string;
}
