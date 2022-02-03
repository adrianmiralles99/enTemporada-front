import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdatosComponent } from './moddatos.component';

describe('ModdatosComponent', () => {
  let component: ModdatosComponent;
  let fixture: ComponentFixture<ModdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModdatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
