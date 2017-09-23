import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecepieService} from '../recepies.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})

export class RecepieEditComponent implements OnInit {

  id: number;
  editMode = false;
  recepieForm: FormGroup;

  constructor(private route: ActivatedRoute, private recepieService: RecepieService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        console.log(this.editMode);
        this.initForm();
      }
    );
  }

  getControls() {
    return (<FormArray>this.recepieForm.get('ingredients')).controls;
  }

  private initForm() {
    let recepieName = '';
    let recepieImgPath = '';
    let recepieDescription = '';
    const recepieIngredients = new FormArray([]);
    if (this.editMode) {
      const recepie = this.recepieService.getRecepieId(this.id);
      recepieName = recepie.name;
      recepieImgPath = recepie.imagePath;
      recepieDescription = recepie.description;
      if (recepie.ingredients) {
        for (const ingredient of recepie.ingredients) {
          recepieIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recepieForm = new FormGroup({
      'name': new FormControl(recepieName, Validators.required),
      'imagePath': new FormControl(recepieImgPath, Validators.required),
      'description': new FormControl(recepieDescription, Validators.required),
      'ingredients': recepieIngredients
    });
  }

  onSubmit() {
    // const newRecepie = new Recepie(
    //   this.recepieForm.value['name'],
    //   this.recepieForm.value['description'],
    //   this.recepieForm.value['imagePath'],
    //   this.recepieForm.value['ingredients']);
    if (this.editMode) {
      this.recepieService.updateRecepie(this.id, this.recepieForm.value);
    } else {
      this.recepieService.addRecepie(this.recepieForm.value);
    }
    this.onCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recepieForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index);
  }

}
