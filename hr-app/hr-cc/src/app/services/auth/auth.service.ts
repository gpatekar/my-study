import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'e7A0tggBMr7WYzz6DjEI4YOMJUvwqGbR',
    domain: 'test-guru.auth0.com',
    responseType: 'token id_token',
    audience: 'https://test-guru.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/',
    scope: 'openid profile read:leaves'
  });

  constructor(private router: Router) { }

  public login(user): void {
    const access_token = localStorage.getItem('access_token');
    if (access_token !== null && access_token !== undefined) {
        this.router.navigate(['/dashboard']);
    } else {
    this.auth0.redirect.loginWithCredentials({
        connection: 'Username-Password-Authentication',
        username: user.name,
        password: user.password,
        scope: 'openid profile read:leaves'
      }, function (err, res) {
        console.log('error', err);
        // handle errors or continue
      });
    }
  }


  public handleAuthentication(): void {
    const access_token = localStorage.getItem('access_token');
    if (access_token !== null && access_token !== undefined) {
        this.router.navigate(['/dashboard']);
    } else {
        this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          window.location.hash = '';
          this.setSession(authResult);
          this.router.navigate(['/dashboard']);
        } else if (err) {
        // this.router.navigate(['/']);
          console.log(err);
        }
      });
    }
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {

     this.auth0.logout({
      returnTo: 'http://localhost:4200/',
      client_id: 'e7A0tggBMr7WYzz6DjEI4YOMJUvwqGbR',
    });

    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

  // public isAuthenticated(): boolean {
  //   // Check whether the current time is past the
  //   // Access Token's expiry time
  //   const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
  //   return new Date().getTime() < expiresAt;
  // }
}
