import type ProductRepository from "../repositories/product.repository";
import type { CreateProductInput } from "../schemas/product.schema";
import { rupeesToPaisa } from "../utility/helper";

export class ProductService {
    constructor(private productRepository: ProductRepository){}

    async getProducts(){
        return this.productRepository.getProducts();
    }

    async createProducts(product: CreateProductInput){
        const { price, ...rest } = product;
        const data = { ...rest, pricePaise: rupeesToPaisa(price) };
        return this.productRepository.createProducts(data);
    }
}
