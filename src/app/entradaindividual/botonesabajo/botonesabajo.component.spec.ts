import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesabajoComponent } from './botonesabajo.component';

describe('BotonesabajoComponent', () => {
  let component: BotonesabajoComponent;
  let fixture: ComponentFixture<BotonesabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
