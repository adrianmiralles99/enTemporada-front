import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceperfilentradasComponent } from './indiceperfilentradas.component';

describe('IndiceperfilentradasComponent', () => {
  let component: IndiceperfilentradasComponent;
  let fixture: ComponentFixture<IndiceperfilentradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceperfilentradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceperfilentradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
