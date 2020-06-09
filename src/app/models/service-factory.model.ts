import { Service } from './service.abstract';
import { Music } from './music.model';
import { Video } from './video.model';
import { Vip } from './vip.model';
import { OnDemand } from './on-demand.model';

export class ServiceFactory {
    idUser : Number;
    subcriptionDate : Date;
    
    constructor(idUser : number, subsDate: Date){
       this.idUser = idUser,
       this.subcriptionDate  = subsDate 
    }

    getShape(shapeType : number,descrip : string, price : number){
        if(shapeType == null){
           return null;
        }		
        if(shapeType === 1){
           return new Music(1,descrip, price );
           
        } else if(shapeType == 2){
           return new Video(2,descrip, price);
           
        } else if(shapeType === 3){
           return new Vip(3,descrip, price);

        } else if(shapeType === 4){
            return new OnDemand(4,descrip);
         }
        
        return null;
     };
}
