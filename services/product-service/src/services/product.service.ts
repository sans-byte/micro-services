import type ProductRepository from "../repositories/product.repository";
import type { CreateProductInput } from "../schemas/product.schema";
import { rupeesToPaise } from "../utility/helper";

export class ProductService {
    constructor(private productRepository: ProductRepository){}

    async getProducts(){
        return this.productRepository.getProducts();
    }

    async getProductById(id: string){
        return this.productRepository.getProductById(id);
    }

    async createProducts(product: CreateProductInput){
        const { price, ...rest } = product;
        const data = { ...rest, pricePaise: rupeesToPaise(price) };
        return this.productRepository.createProducts(data);
    }
}
