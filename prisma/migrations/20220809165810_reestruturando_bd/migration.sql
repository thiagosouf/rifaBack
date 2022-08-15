/*
  Warnings:

  - A unique constraint covering the columns `[rifaId]` on the table `admRifas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "admRifas" DROP CONSTRAINT "admRifas_rifaId_fkey";

-- AlterTable
CREATE SEQUENCE "admrifas_rifaid_seq";
ALTER TABLE "admRifas" ALTER COLUMN "rifaId" SET DEFAULT nextval('admrifas_rifaid_seq');
ALTER SEQUENCE "admrifas_rifaid_seq" OWNED BY "admRifas"."rifaId";

-- AlterTable
ALTER TABLE "rifas" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "rifas_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "admRifas_rifaId_key" ON "admRifas"("rifaId");

-- AddForeignKey
ALTER TABLE "rifas" ADD CONSTRAINT "rifas_id_fkey" FOREIGN KEY ("id") REFERENCES "admRifas"("rifaId") ON DELETE RESTRICT ON UPDATE CASCADE;
