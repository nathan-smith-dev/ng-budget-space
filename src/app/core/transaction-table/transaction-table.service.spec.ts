import { TestBed } from '@angular/core/testing';

import { TransactionTableService } from './transaction-table.service';

describe('TransactionTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionTableService = TestBed.get(TransactionTableService);
    expect(service).toBeTruthy();
  });
});
