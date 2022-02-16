import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotoneditarComponent } from './botoneditar.component';

describe('BotoneditarComponent', () => {
  let component: BotoneditarComponent;
  let fixture: ComponentFixture<BotoneditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotoneditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotoneditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
