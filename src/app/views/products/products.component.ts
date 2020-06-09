import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    this.chargeProducts();
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
