import { Service } from './service.abstract';

export class Video extends Service {
    idService: Number =   4;
    description : string = "Solo Película";
    price: Number = 10;
    constructor(){
        super();
    };
    getDescription(): string{
        return this.description;
    }
}
