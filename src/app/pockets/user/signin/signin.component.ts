import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signFormGroup: FormGroup | undefined;

  /** Error attribut */
  errorClassBorder = {'outline-red-400 outline-4 outline drop-shadow-lg' :true};
  error = false;
  constructor(
    private fb: FormBuilder
  ) {
    this.initSigning();
  }
  ngOnInit(): void {
    this.signFormGroup?.valueChanges.subscribe(
      ()=> {
        this.error = false;
      }
    )
    
  }

  initSigning() {
    this.signFormGroup = this.fb.group({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
    })
  }

  authenticate() {
    if(this.signFormGroup?.valid)
    {
      this.error = false;
      console.log(this.signFormGroup?.value);
    }
    else {
      this.error = true;
    }
  }

}
