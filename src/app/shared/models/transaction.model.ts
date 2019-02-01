import { Category } from './category.model';

export class Transaction {
  constructor(
    public id: string,
    public amount: number,
    public category: Category,
    public date: Date,
    public desc: string,
    public type: string
  ) {}
}
