import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexrecetaindComponent } from './indexrecetaind.component';

describe('IndexrecetaindComponent', () => {
  let component: IndexrecetaindComponent;
  let fixture: ComponentFixture<IndexrecetaindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexrecetaindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexrecetaindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
