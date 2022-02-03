import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMisrecetasComponent } from './card-misrecetas.component';

describe('CardMisrecetasComponent', () => {
  let component: CardMisrecetasComponent;
  let fixture: ComponentFixture<CardMisrecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMisrecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMisrecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
