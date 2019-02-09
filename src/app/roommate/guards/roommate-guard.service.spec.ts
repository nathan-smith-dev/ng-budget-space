import { TestBed } from '@angular/core/testing';

import { RoommateGuard } from './roommate-guard.service';

describe('RoommateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoommateGuard = TestBed.get(RoommateGuard);
    expect(service).toBeTruthy();
  });
});
