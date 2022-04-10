import { TestBed } from '@angular/core/testing';

import { LikesSubcomentarioService } from './likes-subcomentario.service';

describe('LikesSubcomentarioService', () => {
  let service: LikesSubcomentarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesSubcomentarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
