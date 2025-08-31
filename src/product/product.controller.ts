import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    // private productService;
    // constructor() {
    //     this.productService = new ProductService();
    // }

    /** Dependency Injection - handled by NestJs framework automatically */
    constructor(private readonly productService: ProductService) {}

    @Get()
    getProducts() {
        return this.productService.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.productService.getProductById(Number(id));
    }
}
