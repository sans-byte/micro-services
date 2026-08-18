-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price_paise" BIGINT NOT NULL,
    "stock" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "products_price_paise_check" CHECK ("price_paise" >= 0),
    CONSTRAINT "products_stock_check" CHECK ("stock" >= 0)
);

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");
