export class Expense {
  constructor(
    public amount: number,
    public date: Date,
    public description: string,
    public categoryId: string
  ) {}
}
