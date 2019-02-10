import { TestBed } from '@angular/core/testing';

import { RoommateService } from './roommate.service';

describe('RoommateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoommateService = TestBed.get(RoommateService);
    expect(service).toBeTruthy();
  });
});
