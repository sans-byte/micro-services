import type ProductRepository from "../repositories/product.repository";
import type { Product } from "../types";
import { rupeesToPaisa } from "../utility/helper";

export class ProductService {
    constructor(private productRepository: ProductRepository){}

    async getProducts(){
        return await this.productRepository.getProducts();
    }

    async createProducts(product: Product){
        try {
            const pricePaise = rupeesToPaisa(product.price);
            const {price, ...rest} = product;
            const data = {pricePaise, ...rest};
            return await this.productRepository.createProducts(data);
        } catch (error) {
            throw error;
        }
    }
}