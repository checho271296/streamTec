import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from "../../models/user.model";
import { Router } from '@angular/router';

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
    let i = userlist.length;
    let newUser : User = new User(i+1,
      this.registerUserData.name,
      this.registerUserData.lastname,
      this.registerUserData.email,
      this.registerUserData.password,
      this.registerUserData.birth,
      this.registerUserData.subsType
      )
    if(newUser.subsType === 1){
      localStorage.setItem("subs","1");
      this._router.navigate([`products/${newUser.idUser}`])
    }
    if(newUser.subsType === 2){
      localStorage.setItem("subs","2");
      this._router.navigate([`products/${newUser.idUser}`])
    }
    if(newUser.subsType === 3){
      localStorage.setItem("subs","3");
      this._router.navigate([`products/${newUser.idUser}`])
    }
    if(newUser.subsType === 4){
      localStorage.setItem("subs","4");
      this._router.navigate([`products/${newUser.idUser}`])
    }
    userlist.push(newUser)
    localStorage.setItem('users', JSON.stringify(userlist))
    localStorage.setItem('token',newUser.idUser.toString())
    console.log(userlist);
  }

}
