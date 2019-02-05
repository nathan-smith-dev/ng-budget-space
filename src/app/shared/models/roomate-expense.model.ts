import { Category } from './category.model';

export interface RoommateExpense {
  id: string;
  amount: number;
  category: Category;
  acknowledged: boolean;
  date: Date;
  description: string;
  direction: string;
}
