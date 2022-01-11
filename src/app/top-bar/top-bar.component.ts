import { Component } from '@angular/core';

import { LoginService } from '../login.service';

import { User } from '../users';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  user = this.loginService.getLoggedUser();

  constructor(private loginService: LoginService) {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
