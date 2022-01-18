import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosloginComponent } from './datoslogin.component';

describe('DatosloginComponent', () => {
  let component: DatosloginComponent;
  let fixture: ComponentFixture<DatosloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
