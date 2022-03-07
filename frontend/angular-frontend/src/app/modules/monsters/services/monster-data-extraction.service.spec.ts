import { TestBed } from '@angular/core/testing';

import { MonsterDataExtractionService } from './monster-data-extraction.service';

describe('MonsterDataExtractionService', () => {
  let service: MonsterDataExtractionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterDataExtractionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
