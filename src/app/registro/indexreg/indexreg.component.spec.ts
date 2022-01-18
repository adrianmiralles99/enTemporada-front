import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexregComponent } from './indexreg.component';

describe('IndexregComponent', () => {
  let component: IndexregComponent;
  let fixture: ComponentFixture<IndexregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
