import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexmisrecetasComponent } from './indexmisrecetas.component';

describe('IndexmisrecetasComponent', () => {
  let component: IndexmisrecetasComponent;
  let fixture: ComponentFixture<IndexmisrecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexmisrecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexmisrecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
