export class UserInventory {
    idUser : Number;
    date : Date;
    products : Array<any>;
    constructor(idUser : number, date :Date, products : Array<any>){
        this.idUser = idUser,
        this.date = date,
        this.products = products
    }
}
