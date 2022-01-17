import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Presentacion.CalendarioComponent } from './presentacion.calendario.component';

describe('Presentacion.CalendarioComponent', () => {
  let component: Presentacion.CalendarioComponent;
  let fixture: ComponentFixture<Presentacion.CalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Presentacion.CalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Presentacion.CalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
