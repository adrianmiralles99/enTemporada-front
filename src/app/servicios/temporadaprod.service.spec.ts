import { TestBed } from '@angular/core/testing';

import { TemporadaprodService } from './temporadaprod.service';

describe('TemporadaprodService', () => {
  let service: TemporadaprodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemporadaprodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
