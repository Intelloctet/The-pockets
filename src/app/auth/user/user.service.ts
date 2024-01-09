import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  storeTokenLocalStorage(token: string) {
    localStorage.setItem('user_token_session', token);
  }
  removeTokenLocalStorage() {
    localStorage.removeItem('user_token_session');
  }
  getTokenLocalStorage() {
    return localStorage.getItem('user_token_session');
  }
  getUsername() {
    
  }
}
