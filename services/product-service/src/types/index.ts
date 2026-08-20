export type Product = {
    id?: string | undefined;
    sku: string;
    name: string;
    description?: string | null | undefined;
    price: string;
    stock: number;
    createdAt?: string | Date | undefined;
    updatedAt?: string | Date | undefined;
}