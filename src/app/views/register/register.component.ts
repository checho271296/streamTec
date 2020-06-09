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

    
  user1 = new User(1,"Sergio","Fonseca Segura","mando@gmail.com","12345678",this.date,1)
  user2 = new User(2,"Checho","Fonseca Segura","checho@gmail.com","12345678",this.date,2)
  user3 = new User(3,"Armando","Fonseca Segura","armando@gmail.com","12345678",this.date,3)
  user4 = new User(4,"Nicole","Fonseca Segura","nicole@gmail.com","12345678",this.date,4)   
  user5 = new User(5,"Pana","Fonseca Segura","mando@gmail.com","12345678",this.date,4);
  userlist : Array<User> = [this.user1,this.user2,this.user3,this.user4,this.user5];

  
  
  constructor(private _router: Router) {
    
   } 

  ngOnInit(): void {
    this.saveData();
  }

  saveData(){
    localStorage.setItem('users', JSON.stringify(this.userlist))
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
      localStorage.setItem("subs","3");
      this._router.navigate([`products/${newUser.idUser}`])
    }
    userlist.push(newUser)
    localStorage.setItem('users', JSON.stringify(userlist))
    
    console.log(userlist);
      

  }


}
