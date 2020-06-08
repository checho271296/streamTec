import { Service } from './service.abstract';

export class OnDemand extends Service {
    idService: Number;
    description : String;
    constructor(idService: number,descrip : string){
        super();
        this.idService = idService,
        this.description = descrip
    };
    printService(){
        console.log(this.idService);
        return this.description;
    }
}
