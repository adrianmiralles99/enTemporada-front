import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonnuevaentradaComponent } from './botonnuevaentrada.component';

describe('BotonnuevaentradaComponent', () => {
  let component: BotonnuevaentradaComponent;
  let fixture: ComponentFixture<BotonnuevaentradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonnuevaentradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonnuevaentradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
