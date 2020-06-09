import { Product } from './product.model';

export class Shop {
    public primitive: any;
    public component: object;
    public product : Product;

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
