import { Category } from './category.model';

export class Transaction {
  constructor(
    public id: string,
    public amount: number,
    public category: Category,
    public date: Date,
    public description: string,
    public type?: string
  ) {}
}
