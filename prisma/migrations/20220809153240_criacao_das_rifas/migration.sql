-- CreateTable
CREATE TABLE "rifas" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "rifas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rifas_numero_key" ON "rifas"("numero");

-- AddForeignKey
ALTER TABLE "rifas" ADD CONSTRAINT "rifas_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
