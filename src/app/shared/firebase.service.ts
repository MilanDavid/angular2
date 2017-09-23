import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {RecepieService} from '../recepies/recepies.service';
import {Recepie} from '../recepies/recepie.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class FirebaseService {
  constructor(private httpClient: HttpClient,
              private recepieService: RecepieService,
              private authService: AuthService) {}

  saveRecepie() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://cookbook-a8f78.firebaseio.com/recepies.json?auth=' + token, this.recepieService.getRecepies());
  }

  getRecepies() {
    // const token = this.authService.getToken();
    // return this.http.get('https://cookbook-a8f78.firebaseio.com/recepies.json?auth=' + token)
    return this.httpClient.get('https://cookbook-a8f78.firebaseio.com/recepies.json')
      .map(
        (response: Response) => {
          const recepies: Recepie[] = response.json();
          for (const recepie of recepies) {
            if (!recepie['ingredients']) {
              console.log(recepie);
              recepie['ingredients'] = [];
            }
          }
          return recepies;
        }
      )
      .subscribe(
      (recepies: Recepie[]) => {
        const recepiesData: Recepie[] = recepies;
        this.recepieService.setRecepies(recepiesData);
        console.log(recepiesData);
      }
    )
  }

}
