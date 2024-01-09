import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  form: FormGroup = this.fb.group({
    firstname: new FormControl()
  })
  constructor(
    private fb: FormBuilder
  ){

  }
}
