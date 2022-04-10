import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexentradasComponent } from './indexentradas.component';

describe('IndexentradasComponent', () => {
  let component: IndexentradasComponent;
  let fixture: ComponentFixture<IndexentradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexentradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexentradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
