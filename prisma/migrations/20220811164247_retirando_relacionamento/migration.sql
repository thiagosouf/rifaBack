-- DropForeignKey
ALTER TABLE "rifas" DROP CONSTRAINT "rifas_userId_fkey";

-- AlterTable
ALTER TABLE "rifas" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "userId" DROP DEFAULT;
