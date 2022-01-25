import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonnuevarecetaComponent } from './botonnuevareceta.component';

describe('BotonnuevarecetaComponent', () => {
  let component: BotonnuevarecetaComponent;
  let fixture: ComponentFixture<BotonnuevarecetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonnuevarecetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonnuevarecetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
