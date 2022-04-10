import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexcreacionentradaComponent } from './indexcreacionentrada.component';

describe('IndexcreacionentradaComponent', () => {
  let component: IndexcreacionentradaComponent;
  let fixture: ComponentFixture<IndexcreacionentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexcreacionentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexcreacionentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
