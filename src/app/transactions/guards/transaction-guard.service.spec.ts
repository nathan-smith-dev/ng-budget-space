import { TestBed } from '@angular/core/testing';

import { TransactionGuardService } from './transaction-guard.service';

describe('TransactionGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionGuardService = TestBed.get(TransactionGuardService);
    expect(service).toBeTruthy();
  });
});
