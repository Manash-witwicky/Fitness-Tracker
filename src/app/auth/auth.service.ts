import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';

@Injectable()
export class AuthService {
  private user: User;
  public authStatus = new Subject<boolean>();

  constructor(private router: Router) {}

  public regusterUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString(),
    };
    this.authSuccess();
  }

  public login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString(),
    };
    this.authSuccess();
  }

  public logout() {
    this.user = null;
    this.authStatus.next(false);
    this.router.navigate(['/login']);
  }

  authSuccess() {
    this.authStatus.next(true);
    this.router.navigate(['/training']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user ? this.user : null; // it evaluates as if user is null then return false else true.
  }
}
