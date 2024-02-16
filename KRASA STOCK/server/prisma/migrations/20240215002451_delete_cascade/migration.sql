-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_productName_fkey";

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_productName_fkey" FOREIGN KEY ("productName") REFERENCES "Product"("name") ON DELETE CASCADE ON UPDATE CASCADE;
