import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcategoriasEntradaComponent } from './indexcategorias-entrada.component';

describe('IndexcategoriasEntradaComponent', () => {
  let component: IndexcategoriasEntradaComponent;
  let fixture: ComponentFixture<IndexcategoriasEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcategoriasEntradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcategoriasEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
