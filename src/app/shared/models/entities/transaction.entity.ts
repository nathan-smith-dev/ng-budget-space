import { Transaction } from '../transaction.model';

export interface TransactionEntity {
  [key: string]: Transaction;
}
