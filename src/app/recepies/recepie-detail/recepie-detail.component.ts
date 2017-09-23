import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import {Recepie} from '../recepie.model';
import {ShoppingListService} from '../../shopping-list/shoppinglist.service';
import {RecepieService} from '../recepies.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  recepies: Recepie;
  id: number;

  constructor(private shoppingList: ShoppingListService,
              private recepieService: RecepieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recepies = this.recepieService.getRecepieId(this.id);
      }
    );
  }

  sendToShoppingList() {
    this.shoppingList.addIngredients(this.recepies.ingredients);
  }

  onEditRecepie() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecepie() {
    this.recepieService.deleteRecepie(this.id);
    this.router.navigate(['/recepies']);
  }

}
