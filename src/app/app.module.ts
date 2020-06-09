import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { CatalogueComponent } from './views/catalogue/catalogue.component';
import { FooterComponent } from './views/footer/footer.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserProfileComponent } from './views/user-profile/user-profile.component';
import { ProductsComponent } from './views/products/products.component';
import { AuthService } from './models/auth.service';
import { AuthGuard } from './auth.guard';
import { CarouselComponent } from './views/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatalogueComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    ProductsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
