import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacionRecetasComponent } from './presentacion-recetas.component';

describe('PresentacionRecetasComponent', () => {
  let component: PresentacionRecetasComponent;
  let fixture: ComponentFixture<PresentacionRecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacionRecetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentacionRecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
