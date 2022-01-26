import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecucontraComponent } from './recucontra.component';

describe('RecucontraComponent', () => {
  let component: RecucontraComponent;
  let fixture: ComponentFixture<RecucontraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecucontraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecucontraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
