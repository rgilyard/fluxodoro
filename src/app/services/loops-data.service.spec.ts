import { TestBed } from '@angular/core/testing';

import { LoopsDataService } from './loops-data.service';

describe('LoopsDataService', () => {
  let service: LoopsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoopsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
