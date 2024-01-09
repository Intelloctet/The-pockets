import { Injectable } from '@angular/core';
import { JwtService } from '../../jwt/jwt.service';
import { UserService } from '../../user/user.service';
import { Observable, of, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string | null = null;
  constructor(
    private jwt?: JwtService,
    private user?: UserService
  ) { }
  isAuthenticate() {
    const token = this.user?.getTokenLocalStorage();
    if (token) {
      try {
        return this.jwt?.isTokenExpired(token).data
      } catch (error) {
        return false
      }
    }
    return false
  }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
