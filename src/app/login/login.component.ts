import { Component, OnInit } from '@angular/core';

import { User, users } from '../users';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuider.group({
    username: '',
    password: '',
  });

  logged = false;

  constructor(
    private loginService: LoginService,
    private formBuider: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.loginService.doLogin(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    if (this.loginService.IsLoggedUser()) {
      this.router.navigate(['/posts']);
    } else {
    }
  }
}
