import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checkRoot = true;
  constructor(
    private loginService: LoginService
  ){

  }
  ngOnInit(): void {
    //Check if we have already root user
    this.loginService.checkRootUser().subscribe(
      (check) => {
        this.checkRoot = check;
      }
    )
  }
}
