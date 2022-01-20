import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexrecetasComponent } from './indexrecetas.component';

describe('IndexrecetasComponent', () => {
  let component: IndexrecetasComponent;
  let fixture: ComponentFixture<IndexrecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndexrecetasComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexrecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
