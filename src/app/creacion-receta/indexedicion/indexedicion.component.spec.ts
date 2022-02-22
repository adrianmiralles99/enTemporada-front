import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexedicionComponent } from './indexedicion.component';

describe('IndexedicionComponent', () => {
  let component: IndexedicionComponent;
  let fixture: ComponentFixture<IndexedicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexedicionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexedicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
