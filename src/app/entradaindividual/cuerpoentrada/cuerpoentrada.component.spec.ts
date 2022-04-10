import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoentradaComponent } from './cuerpoentrada.component';

describe('CuerpoentradaComponent', () => {
  let component: CuerpoentradaComponent;
  let fixture: ComponentFixture<CuerpoentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuerpoentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuerpoentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
