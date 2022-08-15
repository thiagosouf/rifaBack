-- CreateTable
CREATE TABLE "admRifas" (
    "id" SERIAL NOT NULL,
    "totalNumeros" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "premio" TEXT NOT NULL,
    "rifaId" INTEGER NOT NULL,

    CONSTRAINT "admRifas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "admRifas" ADD CONSTRAINT "admRifas_rifaId_fkey" FOREIGN KEY ("rifaId") REFERENCES "rifas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
