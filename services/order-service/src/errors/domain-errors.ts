export class NotFoundError extends Error {
    constructor(message: string){
        super(message);
        this.name = "NotFoundError";
    }
}

export class InsufficientStockError extends Error {
    constructor(message: string){
        super(message);
        this.name = "InsufficientStockError";
    }
}

export class ProductServiceError extends Error {
    constructor(message: string){
        super(message);
        this.name = "ProductServiceError";
    }
}

export class ProductServiceTimeoutError extends ProductServiceError {
    constructor(message: string){
        super(message);
        this.name = "ProductServiceTimeoutError";
    }
}
