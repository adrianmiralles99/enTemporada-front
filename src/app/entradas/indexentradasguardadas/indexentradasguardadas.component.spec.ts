import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexentradasguardadasComponent } from './indexentradasguardadas.component';

describe('IndexentradasguardadasComponent', () => {
  let component: IndexentradasguardadasComponent;
  let fixture: ComponentFixture<IndexentradasguardadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexentradasguardadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexentradasguardadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
