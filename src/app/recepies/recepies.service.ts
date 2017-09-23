import {Recepie} from './recepie.model';
import {Subject} from 'rxjs/Subject';
import {Ingredient} from '../shared/ingredient.model';

export class RecepieService {
  recepiesChanged = new Subject<Recepie[]>();

  private recepies: any[] = [
    new Recepie('Cheesecake',
      'Sweet vanila cake!',
      'https://www.thecheesecakefactory.com/assets/images/Menu-Import/CCF_FreshStrawberryCheesecake.jpg', [
        new Ingredient('Cheese', 1),
        new Ingredient('Sugar', 1)
      ]),
    new Recepie('Chockolate Cake',
      'Cake made of chockolate',
      'http://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/easy_chocolate_cake_31070_16x9.jpg', [
        new Ingredient('Chocolate', 3),
        new Ingredient('Cherry', 1)
      ])
  ];

  setRecepies(recepies: Recepie[]) {
    this.recepies = recepies;
    this.recepiesChanged.next(this.recepies.slice());
  }

  getRecepies() {
    return this.recepies.slice();
  }

  getRecepieId(index: number) {
    return this.recepies.slice()[index];
  }

  addRecepie(recepie: Recepie) {
    this.recepies.push(recepie);
    this.recepiesChanged.next(this.recepies.slice());
  }


  updateRecepie(index: number, newRecepie: Recepie) {
    this.recepies[index] = newRecepie;
    this.recepiesChanged.next(this.recepies.slice());
  }

  deleteRecepie(index: number) {
    this.recepies.splice(index, 1);
    this.recepiesChanged.next(this.recepies.slice());
  }

}
