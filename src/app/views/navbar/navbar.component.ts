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
      return this.idUser = JSON.parse(localStorage.getItem("token"));
      
    }else{
      return this.idUser = JSON.parse(localStorage.getItem("tokenN"));
    }
    
  }
}
