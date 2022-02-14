import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcreacionComponent } from './indexcreacion.component';

describe('IndexcreacionComponent', () => {
  let component: IndexcreacionComponent;
  let fixture: ComponentFixture<IndexcreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcreacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
