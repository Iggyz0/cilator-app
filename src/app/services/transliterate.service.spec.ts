import { TestBed } from '@angular/core/testing';

import { TransliterateService } from './transliterate.service';

describe('TransliterateService', () => {
  let service: TransliterateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransliterateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
