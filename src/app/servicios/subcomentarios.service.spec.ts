import { TestBed } from '@angular/core/testing';

import { SubcomentariosService } from './subcomentarios.service';

describe('SubcomentariosService', () => {
  let service: SubcomentariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcomentariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
