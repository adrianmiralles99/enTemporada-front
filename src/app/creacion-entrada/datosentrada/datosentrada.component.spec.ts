import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosentradaComponent } from './datosentrada.component';

describe('DatosentradaComponent', () => {
  let component: DatosentradaComponent;
  let fixture: ComponentFixture<DatosentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
