/*
  Warnings:

  - You are about to drop the column `rifaId` on the `admRifas` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "rifas" DROP CONSTRAINT "rifas_id_fkey";

-- DropIndex
DROP INDEX "admRifas_rifaId_key";

-- AlterTable
ALTER TABLE "admRifas" DROP COLUMN "rifaId";

-- AlterTable
CREATE SEQUENCE "rifas_id_seq";
ALTER TABLE "rifas" ALTER COLUMN "id" SET DEFAULT nextval('rifas_id_seq');
ALTER SEQUENCE "rifas_id_seq" OWNED BY "rifas"."id";
