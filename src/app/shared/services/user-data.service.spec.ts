import { TestBed } from '@angular/core/testing';

import { UserDataService } from './user-data.service';
import { Store } from '@ngrx/store';
import * as fromTransactions from '../../store/transactions';

describe('UserDataService', () => {
  let mockStoreService;
  let service: UserDataService;

  beforeEach(() => {
    mockStoreService = jasmine.createSpyObj(['dispatch']);

    TestBed.configureTestingModule({
      providers: [{ provide: Store, useValue: mockStoreService }]
    });

    service = TestBed.get(UserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#updateUserData', () => {
    it('should dispatch FetchTransactions, FetchUserCategories, FetchCategorizedExpenses, FetchIncomeAndExpenseTotals', () => {
      service.updateUserData();

      expect(mockStoreService.dispatch).toHaveBeenCalledWith(
        jasmine.any(fromTransactions.FetchTransactions)
      );
      expect(mockStoreService.dispatch).toHaveBeenCalledWith(
        jasmine.any(fromTransactions.FetchUserCategories)
      );
      expect(mockStoreService.dispatch).toHaveBeenCalledWith(
        jasmine.any(fromTransactions.FetchCategorizedExpenses)
      );
      expect(mockStoreService.dispatch).toHaveBeenCalledWith(
        jasmine.any(fromTransactions.FetchIncomeAndExpenseTotals)
      );
    });
  });
});
