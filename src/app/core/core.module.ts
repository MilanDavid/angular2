import {NgModule} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {AppRouteingModule} from '../app-routing.module';
import {ShoppingListService} from '../shopping-list/shoppinglist.service';
import {RecepieService} from '../recepies/recepies.service';
import {FirebaseService} from '../shared/firebase.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRouteingModule
  ],
  exports: [
    AppRouteingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecepieService,
    FirebaseService,
    AuthService
  ]
})
export class CoreModule { }
