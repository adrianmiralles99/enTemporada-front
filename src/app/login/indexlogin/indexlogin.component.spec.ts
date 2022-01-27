import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexloginComponent } from './indexlogin.component';

describe('IndexloginComponent', () => {
  let component: IndexloginComponent;
  let fixture: ComponentFixture<IndexloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
