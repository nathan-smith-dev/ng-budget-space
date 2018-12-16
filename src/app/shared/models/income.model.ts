export class Income {
    constructor(
        public amount: number,
        public date: Date,
        public desc: string,
        public categoryId: string
    ) {}
}