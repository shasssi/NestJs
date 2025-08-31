import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {
            id: 1,
            name: 'Shirt'
        },
        {
            id: 2,
            name: 'Bag'
        }
    ]
    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        return this.products.find((product) => product.id === id);
    }
}
