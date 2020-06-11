import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { ServiceFactory } from 'src/app/models/service-factory.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public date: Date = new Date(); 
  registerUserData = {
    "name": "",
    "lastname" : "",
    "birthday" :  this.date,
    "email": "",
    "subsDescrip": "",
    "subsDate" : this.date,
    "subsDateEnd": this.date
  };

  person: User;
  service: ServiceFactory;
  userlist : Array<User>;
  subsList: Array<ServiceFactory>;
  constructor(private activatedRoute :ActivatedRoute) { }

  public updateFlag = false;
  
  ngOnInit(): void {
    this.setInfo();
  }
  add_months(dt, n) 
 {

   return new Date(dt.setMonth(dt.getMonth() + n));      
 }

  setInfo(){
    let userlist : Array<User> = JSON.parse(localStorage.getItem("usersN"));
    let subsList : Array<ServiceFactory> = JSON.parse(localStorage.getItem("subscriptionsN"));
    if(userlist != null){

      this.activatedRoute.params.subscribe(params =>{ 
        let user = params['_id'];
        this.person = userlist.find( ({ idUser }) => idUser === Number(user) );
        this.service = subsList.find( ({ idUser }) => idUser === Number(user) );
        console.log(this.service,"SERVICE")
        this.registerUserData.name = this.person.name;
        this.registerUserData.lastname = this.person.lastname;
        this.registerUserData.birthday = this.person.birthday;
        this.registerUserData.email = this.person.email;
        this.registerUserData.subsDescrip = this.service.service['description'];
        this.registerUserData.subsDate = this.service.subcriptionDate;
        var dt = new Date();
        this.registerUserData.subsDateEnd =  this.add_months(dt, 1); 
      });
    } else{
      let userlist : Array<User> = JSON.parse(localStorage.getItem("users"));
      let subsList : Array<ServiceFactory> = JSON.parse(localStorage.getItem("subscriptions"));
      this.activatedRoute.params.subscribe(params =>{ 
        let user = params['_id'];
        this.person = userlist.find( ({ idUser }) => idUser === Number(user) );
        this.service = subsList.find( ({ idUser }) => idUser === Number(user) );
        console.log(this.service,"SERVICE")
        this.registerUserData.name = this.person.name;
        this.registerUserData.lastname = this.person.lastname;
        this.registerUserData.birthday = this.person.birthday;
        this.registerUserData.email = this.person.email;
        this.registerUserData.subsDescrip = this.service.service['description'];
        this.registerUserData.subsDate = this.service.subcriptionDate;
        var dt = new Date();
        this.registerUserData.subsDateEnd =  this.add_months(dt, 1); 
      });
    }
      
   

  }

  

}
