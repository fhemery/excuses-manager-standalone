import { TestBed } from '@angular/core/testing';

import { ExcusesService } from './excuses.service';

describe('ExcusesService', () => {
  let service: ExcusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExcusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
