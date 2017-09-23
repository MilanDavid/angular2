import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RecepieDetailComponent} from './recepie-detail/recepie-detail.component';
import {RecepieItemComponent} from './recepie-list/recepie-item/recepie-item.component';
import {RecepieListComponent} from './recepie-list/recepie-list.component';
import {RecepiesComponent} from './recepies.component';
import {RecepieEditComponent} from './recepie-edit/recepie-edit.component';
import {RecepieStartComponent} from './recepie-start/recepie-start.component';
import {RecepiesRoutingModule} from './recepies-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    RecepiesComponent,
    RecepieStartComponent,
    RecepieDetailComponent,
    RecepieItemComponent,
    RecepieListComponent,
    RecepieEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecepiesRoutingModule,
    SharedModule
  ]
})
export class RecepiesModule {

}
