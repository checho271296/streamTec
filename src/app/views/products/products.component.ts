import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  vipFlag = false;
  musicFlag = false;
  videoFlag = false;
  onDemandFlag = false;
  productListMusic : Array<Product> = [] ;
  productListMovies : Array<Product> = [] ;
  constructor() { }

  ngOnInit(): void {
    this.chargeProducts();
    this.getData();
  }


  getData(){
    this.productListMovies = JSON.parse(localStorage.getItem("movies"));
    this.productListMusic = JSON.parse(localStorage.getItem("music"));
  }

  chargeProducts(){
    let subscription = localStorage.getItem("subs");
    if(subscription === "1"){
      this.onDemandFlag = !this.onDemandFlag;
    }
    if(subscription === "2"){
      this.vipFlag = !this.vipFlag;
    }
    if(subscription === "3"){
      this.musicFlag = !this.musicFlag;
    }
    if(subscription === "4"){
      this.videoFlag = !this.videoFlag;
    }

  }

  
}
