export class UserInventory {
    idUser : Number = 0;
    date : Date;
    products : Array<any> = [];
    constructor(date :Date){
        this.date = date
    }
}
