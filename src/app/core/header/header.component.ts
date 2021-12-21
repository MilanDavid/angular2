import {Component} from '@angular/core';
import {Response} from '@angular/http';
import {FirebaseService} from '../../shared/firebase.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  constructor(private firebase: FirebaseService, private authService: AuthService) {}

  onSave() {
    this.firebase.saveRecepie().subscribe(
      (response: Response) => console.log(response),
      (error) => console.log('Something went wrong :('));
  }

  getData() {
    this.firebase.getRecepies();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
