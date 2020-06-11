import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'; 
import { User } from 'src/app/models/user.model';
import { stringify } from 'querystring';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userlist : Array<User> ;
  loginUserData = {"email": "","password": ""};
  person : User;
  constructor(private _router: Router) { 
  }
  
  ngOnInit(): void {
    
  }

  logIn(){

    this.userlist = JSON.parse(localStorage.getItem("users"));
    this.person = this.userlist.find( ({ email }) => email === this.loginUserData.email );
    if(this.person){
      if(this.person.password === this.loginUserData.password){
        if(this.person.subsType === 1){
          localStorage.setItem("subs","1");
          localStorage.setItem('token',this.person.idUser.toString())
          this._router.navigate([`products/${this.person.idUser}`])
        }
        else if(this.person.subsType === 2){
          localStorage.setItem("subs","2");
          localStorage.setItem('token',this.person.idUser.toString())
          this._router.navigate([`products/${this.person.idUser}`])
        }
        else if(this.person.subsType === 3){
          localStorage.setItem("subs","3");
          localStorage.setItem('token',this.person.idUser.toString())
          this._router.navigate([`products/${this.person.idUser}`])
        }
        else if(this.person.subsType === 4){
          localStorage.setItem("subs","4");
          localStorage.setItem('token',this.person.idUser.toString())
          this._router.navigate([`products/${this.person  .idUser}`])
        }
        
      }else{
        console.log("Error");
      }
    }
    else{
      console.log("Error");
    }
   
  }
  
}
