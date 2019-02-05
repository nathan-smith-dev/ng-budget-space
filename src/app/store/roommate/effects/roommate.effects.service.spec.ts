import { TestBed } from '@angular/core/testing';

import { RoommateEffectsService } from './roommate.effects.service';

describe('RoommateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoommateEffectsService = TestBed.get(RoommateEffectsService);
    expect(service).toBeTruthy();
  });
});
