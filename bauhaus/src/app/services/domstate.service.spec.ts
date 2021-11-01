import { TestBed } from '@angular/core/testing';

import { DOMStateService } from './domstate.service';

describe('DOMStateService', () => {
  let service: DOMStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DOMStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
