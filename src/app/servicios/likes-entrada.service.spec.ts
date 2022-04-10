import { TestBed } from '@angular/core/testing';

import { LikesEntradaService } from './likes-entrada.service';

describe('LikesEntradaService', () => {
  let service: LikesEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
