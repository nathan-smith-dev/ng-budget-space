import { TestBed } from '@angular/core/testing';

import { TransactionsGuard } from './transaction-guard.service';

describe('TransactionsGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionsGuard = TestBed.get(TransactionsGuard);
    expect(service).toBeTruthy();
  });
});
