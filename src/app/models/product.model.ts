
export class Product {
    image: String;
    idProduct : Number;
    name : String;
    length : Number;
    description: String;
    price : Number;
    type : String;
    public primitive: any;
    public component: object;
    public product : Product;
    
    constructor(image: string, idProduct : number, name : string,length : number,description: string,price : Number,type : string){
        this.image = image,
        this.idProduct = idProduct,
        this.name = name,
        this.length = length,
        this.description = description,
        this.price = price,
        this.type = type
    }

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.product = {
            ...this.product,
            prototype: { ...this },
        };

        return clone;
    }

}
