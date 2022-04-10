import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexentradaindComponent } from './indexentradaind.component';

describe('IndexentradaindComponent', () => {
  let component: IndexentradaindComponent;
  let fixture: ComponentFixture<IndexentradaindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexentradaindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexentradaindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
