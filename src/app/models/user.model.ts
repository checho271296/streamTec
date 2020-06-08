import { Shop } from './shop.abstract';

export class User extends Shop{
    idUser: Number;
    name : String;
    lastname : String;
    email: String;
    password :String;
    birthday : Date;
    subsType : Number;
    
    constructor(idUser: number,name : string,lastname : string,email: string,password :string,birthday : Date,subsType : number){
        super(),
        this.idUser= idUser,
        this.name = name,
        this.lastname = lastname,
        this.email= email,
        this.password = password,
        this.birthday = birthday,
        this.subsType = subsType
    };
}
