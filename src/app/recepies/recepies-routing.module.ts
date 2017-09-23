import {NgModule} from '@angular/core';
import {AuthGuardService} from '../auth/auth-guard.service';
import {RouterModule, Routes} from '@angular/router';
import {RecepiesComponent} from './recepies.component';
import {RecepieEditComponent} from './recepie-edit/recepie-edit.component';
import {RecepieStartComponent} from './recepie-start/recepie-start.component';
import {RecepieDetailComponent} from './recepie-detail/recepie-detail.component';

const recepiesRoutes: Routes = [
  {path: '', component: RecepiesComponent, children: [
    {path: '', component: RecepieStartComponent},
    {path: 'new', component: RecepieEditComponent, canActivate: [AuthGuardService] },
    {path: ':id', component: RecepieDetailComponent },
    {path: ':id/edit', component: RecepieEditComponent, canActivate: [AuthGuardService]  },
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(recepiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecepiesRoutingModule {

}
