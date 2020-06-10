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
  constructor(public authService: AuthService,private activatedRoute :ActivatedRoute){
    
  }

  ngOnInit(): void 
  {
    this.idUser = JSON.parse(localStorage.getItem("token"));
  }

}
