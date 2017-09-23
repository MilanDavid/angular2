import {Component, OnDestroy, OnInit} from '@angular/core';
import { Recepie } from '../recepie.model';
import {RecepieService} from '../recepies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {FirebaseService} from '../../shared/firebase.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit, OnDestroy {
  recepies: Recepie[];
  subscription: Subscription;

  constructor(private recepieService: RecepieService,
              private router: Router,
              private route: ActivatedRoute,
              private firebaseData: FirebaseService) { }

  ngOnInit() {
    this.subscription = this.recepieService.recepiesChanged.subscribe(
      (recepies: Recepie[]) => {
        this.recepies = recepies;
      }
    );
    this.recepies = this.recepieService.getRecepies();
    this.firebaseData.getRecepies();
  }

  onClickListener() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
