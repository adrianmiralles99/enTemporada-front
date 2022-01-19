import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionadasComponent } from './relacionadas.component';

describe('RelacionadasComponent', () => {
  let component: RelacionadasComponent;
  let fixture: ComponentFixture<RelacionadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelacionadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
