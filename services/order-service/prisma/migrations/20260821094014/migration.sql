/*
  Warnings:

  - Added the required column `total_price` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unit_price_paise` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "total_price" INTEGER NOT NULL,
ADD COLUMN     "unit_price_paise" INTEGER NOT NULL;
