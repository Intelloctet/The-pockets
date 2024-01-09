import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOrgComponent } from './signup-org.component';

describe('SignupOrgComponent', () => {
  let component: SignupOrgComponent;
  let fixture: ComponentFixture<SignupOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupOrgComponent]
    });
    fixture = TestBed.createComponent(SignupOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
