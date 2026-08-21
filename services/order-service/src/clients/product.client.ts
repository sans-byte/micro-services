import { ProductServiceError, ProductServiceTimeoutError } from "../errors/domain-errors";

const REQUEST_TIMEOUT_MS = 2000;

export type ProductDto = {
    id: string;
    sku: string;
    name: string;
    description: string | null;
    pricePaise: number;
    stock: number;
    createdAt: string;
    updatedAt: string;
};

export default class ProductClient {
    constructor(private baseUrl: string){}

    async getProductById(productId: string): Promise<ProductDto | null> {
        let response: Response;
        try {
            response = await fetch(`${this.baseUrl}/products/${productId}`, {
                signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
            });
        } catch (error) {
            if (error instanceof Error && error.name === "TimeoutError") {
                throw new ProductServiceTimeoutError(
                    `Product service did not respond within ${REQUEST_TIMEOUT_MS}ms`
                );
            }
            throw new ProductServiceError(
                `Failed to reach product service: ${error instanceof Error ? error.message : String(error)}`
            );
        }

        if (response.status === 404) {
            return null;
        }
        if (!response.ok) {
            throw new ProductServiceError(`Product service responded with status ${response.status}`);
        }
        return (await response.json()) as ProductDto;
    }
}
