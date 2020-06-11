import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from "../../models/user.model";
import { Router } from '@angular/router';
import { ServiceFactory } from 'src/app/models/service-factory.model';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public date: Date = new Date(); 
  registerUserData = {
    "name": "",
    "lastname" : "",
    "birth" :  this.date,
    "email": "",
    "password": "",
    "subsType" : 0
  };
  
  constructor(private _router: Router) {    
   } 

  ngOnInit(): void {
    
  
  }

  registerUser(){
    let userlist : Array<User> = JSON.parse(localStorage.getItem("users"));
    let serviceList: Array<ServiceFactory> = JSON.parse(localStorage.getItem("subscriptions"));
    let i = userlist.length;
    let newUser : User = new User(i+1,
      this.registerUserData.name,
      this.registerUserData.lastname,
      this.registerUserData.email,
      this.registerUserData.password,
      this.registerUserData.birth,
      this.registerUserData.subsType
      )
    let newService : ServiceFactory = new ServiceFactory(i+1,this.date);

    
    var flagBirthday : Boolean;
    flagBirthday = newService.checkBirthday(newUser.birthday);
    var flagBirthdayMonth : Boolean;
    flagBirthdayMonth = newService.checkMonthBirthday(newUser.birthday);
    console.log(flagBirthday,flagBirthdayMonth,"BOOLEANS")
    if( (flagBirthday === true) && (flagBirthdayMonth === true)){
      
      let service = newService.getShape(2);
      newService.setService(service);
      newUser.subsType = 2;
      userlist.push(newUser)
      serviceList.push(newService)
      localStorage.setItem('users', JSON.stringify(userlist))
      localStorage.setItem('subscriptions', JSON.stringify(serviceList))
      localStorage.setItem('token',newUser.idUser.toString())
      if(newUser.subsType === 1){
        localStorage.setItem("subs","1");
        this._router.navigate([`products/${newUser.idUser}`])
      }
      else if(newUser.subsType === 2){
        localStorage.setItem("subs","2");
        this._router.navigate([`products/${newUser.idUser}`])
      }
      else if(newUser.subsType === 3){
        localStorage.setItem("subs","3");
        this._router.navigate([`products/${newUser.idUser}`])
      }
      else if(newUser.subsType === 4){
        localStorage.setItem("subs","4");
        this._router.navigate([`products/${newUser.idUser}`])
      }
  // ------------------------------------------------------------------------/    
    }else if(flagBirthdayMonth === true){
      var productListMusic : Array<Product> = [] ;
      var productListMovies : Array<Product> = [] ;
      productListMovies = JSON.parse(localStorage.getItem("movies"));
      productListMusic = JSON.parse(localStorage.getItem("music"));
      for (var j = 0; j < productListMovies.length; j++) {
        var priceOriginal:any  = productListMovies[j].price
        productListMovies[j].price = (priceOriginal - (priceOriginal*0.5));
      }
      for (var n = 0; n < productListMusic.length; n++) {
        var priceOriginal:any  = productListMusic[n].price
        productListMusic[n].price = (priceOriginal - (priceOriginal*0.5));
      }
      localStorage.setItem('music', JSON.stringify(productListMusic))
      localStorage.setItem('movies', JSON.stringify(productListMovies))
      userlist.push(newUser)
      serviceList.push(newService)
      localStorage.setItem('users', JSON.stringify(userlist))
      localStorage.setItem('subscriptions', JSON.stringify(serviceList))
      localStorage.setItem('token',newUser.idUser.toString())
      let service = newService.getShape(newUser.subsType);
      newService.setService(service);
      if(newUser.subsType === 1){
        localStorage.setItem("subs","1");
        this._router.navigate([`products/${newUser.idUser}`])
      }
      else if(newUser.subsType === 2){
        localStorage.setItem("subs","2");
        this._router.navigate([`products/${newUser.idUser}`])
      }
      else if(newUser.subsType === 3){
        localStorage.setItem("subs","3");
        this._router.navigate([`products/${newUser.idUser}`])
      }
      else if(newUser.subsType === 4){
        localStorage.setItem("subs","4");
        this._router.navigate([`products/${newUser.idUser}`])
      }
       // ------------------------------------------------------------------------/  
    }else{
        userlist.push(newUser)
        serviceList.push(newService)
        localStorage.setItem('users', JSON.stringify(userlist))
        localStorage.setItem('subscriptions', JSON.stringify(serviceList))
        localStorage.setItem('token',newUser.idUser.toString())
        let service = newService.getShape(newUser.subsType);
        newService.setService(service);
        if(newUser.subsType === 1){
          localStorage.setItem("subs","1");
          this._router.navigate([`products/${newUser.idUser}`])
        }
        else if(newUser.subsType === 2){
          localStorage.setItem("subs","2");
          this._router.navigate([`products/${newUser.idUser}`])
        }
        else if(newUser.subsType === 3){
          localStorage.setItem("subs","3");
          this._router.navigate([`products/${newUser.idUser}`])
        }
        else if(newUser.subsType === 4){
          localStorage.setItem("subs","4");
          this._router.navigate([`products/${newUser.idUser}`])
        }
        
    }
  }

}
