export class Transaction {
    constructor(
        public id: string, 
        public amount: number, 
        public category: string,
        public categoryid: string,
        public date: Date,
        public desc: string, 
        public type: string
    ) {}
}