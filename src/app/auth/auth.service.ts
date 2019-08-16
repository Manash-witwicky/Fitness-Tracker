import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { User } from './user.model';

export class AuthService {
  private user: User;
  public authStatus = new Subject<boolean>();

  public regusterUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString(),
    };
    this.authStatus.next(true);
  }

  public login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString(),
    };
    this.authStatus.next(true);
  }

  public logout() {
    this.user = null;
    this.authStatus.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
