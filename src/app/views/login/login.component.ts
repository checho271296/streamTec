import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'; 
import { User } from 'src/app/models/user.model';



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
        this._router.navigate([`products/${this.person.idUser}`])
        console.log("HOLA CHECO",this.person.idUser);
      }else{
        console.log("Error");
      }
    }
    else{
      console.log("Error");
    }
   
  }
  
}
