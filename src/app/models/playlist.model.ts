import { AnyARecord } from 'dns';

export class Playlist {
    idUser: Number;
    productList: Array<any>;

    constructor(idUser : number, productList : Array<any>){
        this.idUser = idUser,
        this.productList = productList
    };
}
