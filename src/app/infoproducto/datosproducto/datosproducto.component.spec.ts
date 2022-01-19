import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosproductoComponent } from './datosproducto.component';

describe('DatosproductoComponent', () => {
  let component: DatosproductoComponent;
  let fixture: ComponentFixture<DatosproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosproductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
