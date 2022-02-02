import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexguardadasComponent } from './indexguardadas.component';

describe('IndexguardadasComponent', () => {
  let component: IndexguardadasComponent;
  let fixture: ComponentFixture<IndexguardadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexguardadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexguardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
