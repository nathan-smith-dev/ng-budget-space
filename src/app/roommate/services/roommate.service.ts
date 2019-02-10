import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Store } from '@ngrx/store';
import { Transaction } from 'src/app/shared/models/transaction.model';
import {
  createRoommateExpense,
  deleteRoommateExpense
} from 'src/app/shared/graphql/queries';
import { RoommateExpenseType } from 'src/app/shared/graphql/query.types';
import { map, first } from 'rxjs/operators';
import { FetchRoommateData } from 'src/app/store/roommate';

@Injectable({
  providedIn: 'root'
})
export class RoommateService {
  constructor(private apollo: Apollo) {}

  createRoommateExpense(transaction: Transaction, roommateId: string) {
    const { amount, description, date, category } = transaction;

    const roommateExpense: RoommateExpenseType = {
      amount,
      description,
      date: new Date(date),
      categoryId: category.id,
      roommateId
    };

    return this.apollo.mutate({
      mutation: createRoommateExpense(),
      variables: {
        expense: roommateExpense
      }
    });
  }

  deleteRoommateExpense(id: string) {
    return this.apollo.mutate({
      mutation: deleteRoommateExpense(),
      variables: {
        expense: { id }
      }
    });
  }
}
