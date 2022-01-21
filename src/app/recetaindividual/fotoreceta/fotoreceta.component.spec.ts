import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotorecetaComponent } from './fotoreceta.component';

describe('FotorecetaComponent', () => {
  let component: FotorecetaComponent;
  let fixture: ComponentFixture<FotorecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotorecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotorecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
