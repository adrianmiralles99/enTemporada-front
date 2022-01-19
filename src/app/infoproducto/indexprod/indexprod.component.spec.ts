import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexprodComponent } from './indexprod.component';

describe('IndexprodComponent', () => {
  let component: IndexprodComponent;
  let fixture: ComponentFixture<IndexprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexprodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
