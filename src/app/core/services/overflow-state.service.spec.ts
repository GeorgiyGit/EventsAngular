import { TestBed } from '@angular/core/testing';

import { OverflowStateService } from './overflow-state.service';

describe('OverflowStateService', () => {
  let service: OverflowStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverflowStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
