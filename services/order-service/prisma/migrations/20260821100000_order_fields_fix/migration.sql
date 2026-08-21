-- DropIndex
DROP INDEX "orders_productId_key";

-- AlterTable
ALTER TABLE "orders" RENAME COLUMN "productId" TO "product_id";
ALTER TABLE "orders" RENAME COLUMN "total_price" TO "total_paise";
ALTER TABLE "orders" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'CREATED';
