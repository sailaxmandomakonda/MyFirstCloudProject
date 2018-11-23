import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHatsComponent } from './my-hats/my-hats.component';
import { DetailsComponent } from './details/details.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';


const routes: Routes = [
  {
    path: 'hat',
    component: MyHatsComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: '',
    redirectTo: '/hat',
    pathMatch: 'full'
  }
  ,
  {
    path: '**',
    component: AppNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
