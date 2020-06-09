import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  productListMusic : Array<Product> = [] ;
  productListMovies : Array<Product> = [] ;
  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.productListMovies = JSON.parse(localStorage.getItem("movies"));
    this.productListMusic = JSON.parse(localStorage.getItem("music"));
  }

}
