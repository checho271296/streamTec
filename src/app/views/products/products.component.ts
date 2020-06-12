import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Playlist } from 'src/app/models/playlist.model';
import { ActivatedRoute } from '@angular/router';
import { UserInventory } from 'src/app/models/user-inventory.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  date = new Date();
  vipFlag = false;
  musicFlag = false;
  videoFlag = false;
  onDemandFlag = false;
  productListMusic : Array<Product> = [] ;
  productListMovies : Array<Product> = [] ;
  productAdd : Array<Product> = [] ;
  product : Product;
  cloneable : Product;
  playList : Playlist = new Playlist();
  inventory : UserInventory = new UserInventory(this.date);
  constructor(private activedRoute : ActivatedRoute) { }

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

  addtoPlaylist(nameSe: String){
    let listMusic : Array<Product> = JSON.parse(localStorage.getItem("music"));
    let listMovie :Array<Product> =  JSON.parse(localStorage.getItem("movies"));
    Array.prototype.push.apply(listMusic,listMovie); 

    this.product = listMusic.find( ({ name }) => name === nameSe );
    if(this.product){
      this.productAdd.push(this.product);
      this.activedRoute.params.subscribe(params => {
        let user = params['_id'];
        this.playList.idUser = user;
        this.playList.productList = this.productAdd;
      });
    }else{

      console.log("error")
    }
  }

  addtoInventory(nameSe : String){
    let listMusic : Array<Product> = JSON.parse(localStorage.getItem("music"));
    let listMovie :Array<Product> =  JSON.parse(localStorage.getItem("movies"));
    Array.prototype.push.apply(listMusic,listMovie);
    this.product = listMusic.find( ({ name }) => name === nameSe );
    //this.product.clone();
    if(this.product){

      this.productAdd.push(this.product);
      this.activedRoute.params.subscribe(params => {
        let user = params['_id'];
        this.inventory.idUser = user;
        this.inventory.products = this.productAdd;
      });
    }else{

      console.log("erorr")
    }

  }
}
