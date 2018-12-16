export class Expense {
    constructor(
        public amount: number,
        public date: Date,
        public desc: string,
        public categoryId: string
    ) {}
}