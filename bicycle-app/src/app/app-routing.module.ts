import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { ListingsComponent } from './dashboard/listings/listings.component';
import { CreateComponent } from './dashboard/listings/create/create.component';
import { EditComponent } from './dashboard/listings/edit/edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

class AlwaysAuthGaurd implements CanActivate {
  canActivate() {
    console.log('checking');
    return true;
  }
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'browse',
        component: BrowseComponent
      },
      {
        path: 'listings',
        pathMatch: 'full',
        component: ListingsComponent
      },
      {
        path: '**',
        redirectTo: 'browse',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

