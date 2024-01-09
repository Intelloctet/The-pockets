import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninOrgComponent } from './signin-org.component';

describe('SigninOrgComponent', () => {
  let component: SigninOrgComponent;
  let fixture: ComponentFixture<SigninOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninOrgComponent]
    });
    fixture = TestBed.createComponent(SigninOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
