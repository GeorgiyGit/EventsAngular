import { TestBed } from '@angular/core/testing';

import { PlaceFilterService } from './place-filter.service';

describe('PlaceFilterService', () => {
  let service: PlaceFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
