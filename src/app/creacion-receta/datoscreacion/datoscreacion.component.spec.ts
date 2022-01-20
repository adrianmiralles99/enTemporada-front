import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoscreacionComponent } from './datoscreacion.component';

describe('DatoscreacionComponent', () => {
  let component: DatoscreacionComponent;
  let fixture: ComponentFixture<DatoscreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoscreacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoscreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
