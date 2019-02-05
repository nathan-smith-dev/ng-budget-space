import { RoommateExpense } from './roomate-expense.model';
import { User } from './user.model';

export interface Roommate {
  user: User;
  expenses: RoommateExpense[];
}
