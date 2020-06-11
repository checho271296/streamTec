import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../models/auth.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idUser = "";
  idUserAux = "";
  constructor(public authService: AuthService,private activatedRoute :ActivatedRoute){
    
  }

  ngOnInit(): void 
  {
    
  }

  aux(){
    this.activatedRoute.params.subscribe(params =>{ 
      this.idUserAux = params['_id'];
    });
    this.idUser = JSON.parse(localStorage.getItem("tokenN"));
    if(this.idUser === null){
      console.log(this.idUser,this.idUserAux,"PRUEBA ID USER 1")
      return this.idUser = JSON.parse(localStorage.getItem("token"));
      
    }else{
      console.log(this.idUser,this.idUserAux,"PRUEBA ID USER 2")
      return this.idUser = JSON.parse(localStorage.getItem("tokenN"));
    }
    
  }
}
