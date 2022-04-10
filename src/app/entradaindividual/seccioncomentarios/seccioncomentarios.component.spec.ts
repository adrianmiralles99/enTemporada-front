import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccioncomentariosComponent } from './seccioncomentarios.component';

describe('SeccioncomentariosComponent', () => {
  let component: SeccioncomentariosComponent;
  let fixture: ComponentFixture<SeccioncomentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccioncomentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccioncomentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
