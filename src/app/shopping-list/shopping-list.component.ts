import {Component, OnDestroy, OnInit} from '@angular/core';
import {ShoppingListService} from './shoppinglist.service';
import {Ingredient} from '../shared/ingredient.model';
import {Subscription} from 'rxjs-compat/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shopingList: ShoppingListService) {  }

  ngOnInit() {
    this.ingredients = this.shopingList.getIngredients();
    this.subscription = this.shopingList.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shopingList.startedEditing.next(index);
  }

  onDelete(index: number) {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
