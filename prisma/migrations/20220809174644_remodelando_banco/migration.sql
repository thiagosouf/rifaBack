/*
  Warnings:

  - Added the required column `rifaId` to the `admRifas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rifaId` to the `rifas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admRifas" ADD COLUMN     "rifaId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "rifas" ADD COLUMN     "rifaId" INTEGER NOT NULL;
