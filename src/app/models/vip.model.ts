import { Service } from './service.abstract';

export class Vip extends Service{
    idService: Number = 2;
    description : string = "VIP(Música y Películas)";
    price: Number = 15;
    constructor(){
        super();
    };
    getDescription(): string{
        return this.description;
    }
}
