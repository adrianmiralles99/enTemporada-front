import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceperfilComponent } from './indiceperfil.component';

describe('IndiceperfilComponent', () => {
  let component: IndiceperfilComponent;
  let fixture: ComponentFixture<IndiceperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
