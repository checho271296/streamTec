import { Service } from './service.abstract';

export class OnDemand extends Service {
    idService: Number = 1;
    description : string = "Solo Demanda";
    constructor(){
        super();
    };
    getDescription(): string{
        return this.description;
    }
}
