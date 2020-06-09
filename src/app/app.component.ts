import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Product } from './models/product.model';
import { ServiceFactory } from './models/service-factory.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stream-tec';
  public date: Date = new Date(); 
  user1 = new User(1,"Sergio","Fonseca Segura","mando@gmail.com","12345678",this.date,1)
  user2 = new User(2,"Checho","Fonseca Segura","checho@gmail.com","12345678",this.date,2)
  user3 = new User(3,"Armando","Fonseca Segura","armando@gmail.com","12345678",this.date,3)
  user4 = new User(4,"Nicole","Fonseca Segura","nicole@gmail.com","12345678",this.date,4)   
  user5 = new User(5,"Pana","Fonseca Segura","mando@gmail.com","12345678",this.date,4);
  userlist : Array<User> = [this.user1,this.user2,this.user3,this.user4,this.user5];



  subsList: Array<ServiceFactory>;

  product1  = new Product("queen.jpg",1,"Bohemian Rhapsody",300,"Queen.",5,"Musica");
  product2  = new Product("myself.jpg",2,"Myself",200,"Post Malone.",4,"Musica");
  product3  = new Product("alive.jpg",2,"Alive",200,"Sia.",7,"Musica");
  product4  = new Product("rojo.png",2,"Rojo",200,"J Balvin.",6,"Musica");
  product5  = new Product("avengers.jpg",2,"Avengers : End Game",200,"Marvel.",24,"Pelicula");
  product6  = new Product("grownups.jpg",2,"Grown Ups",200,"Director: Dennis DuganMarvel.",14,"Pelicula");
  product7  = new Product("titanic.jpg",2,"Titanic",200,"Director: James Cameron",34,"Pelicula");
  product8  = new Product("ted.jpg",2,"Ted",200,"Director: Seth MacFarlane.",13,"Pelicula");

  productListMusic : Array<Product> = [this.product1,this.product2,this.product3,this.product4];
  productListMovies : Array<Product> = [this.product5,this.product6,this.product7,this.product8];
  constructor(){}

  ngOnInit(): void {
    this.saveData();
  }

  saveData(){
    localStorage.setItem('users', JSON.stringify(this.userlist))
    localStorage.setItem('music', JSON.stringify(this.productListMusic))
    localStorage.setItem('movies', JSON.stringify(this.productListMovies))
  }
}
