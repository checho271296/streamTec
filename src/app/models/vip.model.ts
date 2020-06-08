import { Service } from './service.abstract';

export class Vip extends Service{
    idService: Number;
    description : String;
    price: Number;
    constructor(idService: number,descrip : string, price : number){
        super();
        this.idService = idService,
        this.description = descrip,
        this.price = price
    };
    printService(){
        console.log(this.idService);
        return this.description;
    }
}
