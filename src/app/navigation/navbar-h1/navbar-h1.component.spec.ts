import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarH1Component } from './navbar-h1.component';

describe('NavbarH1Component', () => {
  let component: NavbarH1Component;
  let fixture: ComponentFixture<NavbarH1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarH1Component]
    });
    fixture = TestBed.createComponent(NavbarH1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
