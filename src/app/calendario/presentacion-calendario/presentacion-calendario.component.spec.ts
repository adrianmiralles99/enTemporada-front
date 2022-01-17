import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionCalendarioComponent } from './presentacion-calendario.component';

describe('PresentacionCalendarioComponent', () => {
  let component: PresentacionCalendarioComponent;
  let fixture: ComponentFixture<PresentacionCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
