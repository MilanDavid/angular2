import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private auth: AuthService) { }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.auth.signupUser(email, password);
  }

}
