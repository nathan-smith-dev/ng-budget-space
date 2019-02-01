import { Transaction } from '../models/transaction.model';
import { Category } from '../models/category.model';

export interface TransactionData {
  transactions: Transaction[];
  categories: Category[];
  incomeTotals: Total;
  expenseTotals: Total;
}

export interface Total {
  total: number;
  categoryTotals: CategoryTotal[];
}

export interface CategoryTotal {
  name: string;
  total: number;
}
