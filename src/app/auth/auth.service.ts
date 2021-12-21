import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .catch(
        (error) => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          auth.currentUser.getIdToken().then(
            (token: string) => this.token = token
          );
          console.log(response)
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    const auth = getAuth();
    auth.currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    const auth = getAuth();
    auth.signOut();
    this.token = null;
  }

}
