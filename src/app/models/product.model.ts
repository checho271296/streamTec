
export class Product {
    image: String;
    idProduct : Number;
    name : String;
    length : Number;
    description: String;
    price : Number;
    type : String;
    
    constructor(image: string, idProduct : number, name : string,length : number,description: string,price : Number,type : string){
        this.image = image,
        this.idProduct = idProduct,
        this.name = name,
        this.length = length,
        this.description = description,
        this.price = price,
        this.type = type
    }

}
