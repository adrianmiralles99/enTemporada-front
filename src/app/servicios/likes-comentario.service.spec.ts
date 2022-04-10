import { TestBed } from '@angular/core/testing';

import { LikesComentarioService } from './likes-comentario.service';

describe('LikesComentarioService', () => {
  let service: LikesComentarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesComentarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
