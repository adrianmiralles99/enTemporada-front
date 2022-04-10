import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraentradaComponent } from './cabeceraentrada.component';

describe('CabeceraentradaComponent', () => {
  let component: CabeceraentradaComponent;
  let fixture: ComponentFixture<CabeceraentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
