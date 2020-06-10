import { Shop } from './shop.abstract';

export class User extends Shop{
    idUser: Number;
    name : string;
    lastname : string;
    email: string;
    password :string;
    birthday : Date;
    subsType : Number;
    
    constructor(idUser: number,name : string,lastname : string,email: string,password :string,birthday : Date,subsType : Number){
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
