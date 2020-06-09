import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../models/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  idUser = "";
  constructor(public authService: AuthService){
    
  }

  ngOnInit(): void 
  {
    this.idUser = JSON.parse(localStorage.getItem("token"));
    console.log("TOME",this.idUser)
  }

}
