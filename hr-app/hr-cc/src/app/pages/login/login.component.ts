import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/';
import { User } from '../../modals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {name: null, password: null};

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.user);
  }


}
