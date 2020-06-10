import { Service } from './service.abstract';

export class Music extends Service {
    idService: Number = 3;
    description : string = "Solo Música";
    price: Number = 10;
    constructor(){
        super();
    };

    getDescription(): string{
        return this.description;
    }
}
