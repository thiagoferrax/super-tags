-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuperTag" (
    "id" SERIAL NOT NULL,
    "titulo" VARCHAR(30) NOT NULL,
    "conteudo" VARCHAR(500) NOT NULL,
    "icon" VARCHAR(30) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SuperTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propriedade" (
    "id" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "superTagId" INTEGER NOT NULL,

    CONSTRAINT "Propriedade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Propriedade" ADD CONSTRAINT "Propriedade_superTagId_fkey" FOREIGN KEY ("superTagId") REFERENCES "SuperTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
