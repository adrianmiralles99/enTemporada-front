import { TestBed } from '@angular/core/testing';

import { FavoritosEntradaService } from './favoritos-entrada.service';

describe('FavoritosEntradaService', () => {
  let service: FavoritosEntradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritosEntradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
