import prisma from ".";
import type { Prisma } from "../generated/prisma/client";

export default class ProductRepository {
  constructor() {}

  async getProducts() {
    return prisma.product.findMany();
  }

  async createProducts(product: Prisma.ProductCreateInput){
    return prisma.product.create({ data: product });
  }
}
