import { Injectable } from '@angular/core';

import { User, users } from './users';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: User | undefined;
  logged: boolean = false;

  constructor() {}

  IsLoggedUser(): boolean {
    if (this.user == null) {
      return false;
    } else {
      return true;
    }
  }

  getLoggedUser() {
    return this.user;
  }

  doLogin(username: string, password: string): void {
    console.log('LOGIN');
    this.user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (this.IsLoggedUser()) {
      this.logged = true;
    }
  }
}
