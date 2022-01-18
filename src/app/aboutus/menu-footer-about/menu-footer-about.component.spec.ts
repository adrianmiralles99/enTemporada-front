import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFooterAboutComponent } from './menu-footer-about.component';

describe('MenuFooterAboutComponent', () => {
  let component: MenuFooterAboutComponent;
  let fixture: ComponentFixture<MenuFooterAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuFooterAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFooterAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
