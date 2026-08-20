-- AlterTable
ALTER TABLE "products" ALTER COLUMN "price_paise" TYPE INTEGER USING "price_paise"::integer;
