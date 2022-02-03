import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicemodperfilComponent } from './indicemodperfil.component';

describe('IndicemodperfilComponent', () => {
  let component: IndicemodperfilComponent;
  let fixture: ComponentFixture<IndicemodperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicemodperfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicemodperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
