import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarranegraComponent } from './barranegra.component';

describe('BarranegraComponent', () => {
  let component: BarranegraComponent;
  let fixture: ComponentFixture<BarranegraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarranegraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarranegraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
