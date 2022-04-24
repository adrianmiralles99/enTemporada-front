import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedicionentradaComponent } from './indexedicionentrada.component';

describe('IndexedicionentradaComponent', () => {
  let component: IndexedicionentradaComponent;
  let fixture: ComponentFixture<IndexedicionentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexedicionentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedicionentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
