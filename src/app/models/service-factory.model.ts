import { Service } from './service.abstract';
import { Music } from './music.model';
import { Video } from './video.model';
import { Vip } from './vip.model';
import { OnDemand } from './on-demand.model';

export class ServiceFactory {
    idUser : Number;
    subcriptionDate : Date;
    service? : Service;
    
    constructor(idUser : Number, subsDate: Date){
       this.idUser = idUser,
       this.subcriptionDate  = subsDate 
    }

    getShape(shapeType : Number){
        if(shapeType == null){
           return null;
        }		
        if(shapeType === 1){
         return new OnDemand();
        } else if(shapeType == 2){
         return new Vip();
        } else if(shapeType === 3){
         return new Music();

        } else if(shapeType === 4){
         return new Video();
         }
        return null;
     };

     setService(service : Service){
        this.service = service;
     }
}
