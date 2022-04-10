import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEntradasComponent } from './card-entradas.component';

describe('CardEntradasComponent', () => {
  let component: CardEntradasComponent;
  let fixture: ComponentFixture<CardEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEntradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
