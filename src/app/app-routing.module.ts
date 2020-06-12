import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { ProductsComponent } from './views/products/products.component';
import { AuthGuard } from './auth.guard';


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
    path : 'userProfile/:_id',
    component : UserProfileComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'products/:_id',
    component: ProductsComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
