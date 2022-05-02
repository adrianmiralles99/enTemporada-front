import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexmisentradasComponent } from './indexmisentradas.component';

describe('IndexmisentradasComponent', () => {
  let component: IndexmisentradasComponent;
  let fixture: ComponentFixture<IndexmisentradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexmisentradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexmisentradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
