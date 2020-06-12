import { Service } from './service.abstract';
import { Music } from './music.model';
import { Video } from './video.model';
import { Vip } from './vip.model';
import { OnDemand } from './on-demand.model';
import { User } from './user.model';

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

     checkBirthday(date : Date){
      var dateObj = new Date();
      var date = new Date(date); 
      var dayUser = date.getUTCDate();
      var day = dateObj.getUTCDate();
      if(dayUser === day){
         return true
      }
      return false
     }

     checkMonthBirthday(date : Date){
      var dateObj = new Date();
      var date = new Date(date);
      var monthUSer = date.getUTCMonth() + 1;
      var month = dateObj.getUTCMonth() + 1; 
      if(monthUSer === month){
         return true
      }
      return false
     }
}
