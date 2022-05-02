import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InferiorEntComponent } from './inferior-ent.component';

describe('InferiorEntComponent', () => {
  let component: InferiorEntComponent;
  let fixture: ComponentFixture<InferiorEntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InferiorEntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InferiorEntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
