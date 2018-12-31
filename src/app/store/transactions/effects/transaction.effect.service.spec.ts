import { TestBed } from '@angular/core/testing';

import { TransactionEffectService } from './transaction.effect.service';

describe('TransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransactionEffectService = TestBed.get(
      TransactionEffectService
    );
    expect(service).toBeTruthy();
  });
});
