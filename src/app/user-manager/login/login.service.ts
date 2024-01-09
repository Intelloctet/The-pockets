import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  constructor(
    private http: HttpClient
  ) { }

  checkRootUser(){
    return this.http.get<boolean>(`${url}/user/rootCheck`)
  }
}
