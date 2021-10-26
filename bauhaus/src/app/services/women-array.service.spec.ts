import { TestBed } from '@angular/core/testing';

import { WomenArrayService } from './women-array.service';

describe('WomenArrayService', () => {
  let service: WomenArrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenArrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
