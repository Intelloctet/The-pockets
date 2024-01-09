import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }
  decodeToken(token: string) {
    try {
      return { status: 'success', data: jwtDecode(token) }
    } catch (error) {
      return { status: 'error', message: error }
    }
  }

  isTokenExpired(token: string) {
    const currentTime = Date.now() / 1000; // Convert milliseconds to seconds
    try {
      const decodedToken: any = this.decodeToken(token)
      return { status: 'success', data: decodedToken.exp > currentTime }
    } catch (error) {
      return { status: 'error', message: error }
    }
  }
}
