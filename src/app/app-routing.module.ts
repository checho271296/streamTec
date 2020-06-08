import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';


const routes: Routes = [
  {
    path : '',
    redirectTo :'/home',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component: CatalogueComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'register',
    component : RegisterComponent
  },
  {
    path : 'userProfile',
    component : UserProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
