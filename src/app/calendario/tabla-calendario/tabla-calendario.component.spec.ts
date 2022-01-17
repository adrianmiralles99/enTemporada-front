import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCalendarioComponent } from './tabla-calendario.component';

describe('TablaCalendarioComponent', () => {
  let component: TablaCalendarioComponent;
  let fixture: ComponentFixture<TablaCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
