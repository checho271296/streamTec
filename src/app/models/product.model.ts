import { Shop } from './shop.abstract';

export class Product{
    idProduct : Number;
    name : String;
    length : Number;
    description: String;
    price : Number;
    type : String;
    
    constructor(idProduct : number, name : string,length : number,description: string,price : Number,type : string){
        this.idProduct = idProduct,
        this.name = name,
        this.length = length,
        this.description = description,
        this.price = price,
        this.type = type
    }
}
