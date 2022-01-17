import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloInicioComponent } from './titulo-inicio.component';

describe('TituloInicioComponent', () => {
  let component: TituloInicioComponent;
  let fixture: ComponentFixture<TituloInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TituloInicioComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
