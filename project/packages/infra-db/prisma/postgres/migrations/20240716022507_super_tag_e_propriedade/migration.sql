-- CreateTable
CREATE TABLE "SuperTag" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" VARCHAR(500) NOT NULL,
    "parentId" INTEGER,

    CONSTRAINT "SuperTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Propriedade" (
    "seqProp" SERIAL NOT NULL,
    "chave" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "superTagId" INTEGER NOT NULL,

    CONSTRAINT "Propriedade_pkey" PRIMARY KEY ("seqProp")
);

-- CreateIndex
CREATE UNIQUE INDEX "SuperTag_titulo_key" ON "SuperTag"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "SuperTag_parentId_key" ON "SuperTag"("parentId");

-- AddForeignKey
ALTER TABLE "SuperTag" ADD CONSTRAINT "SuperTag_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "SuperTag"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Propriedade" ADD CONSTRAINT "Propriedade_superTagId_fkey" FOREIGN KEY ("superTagId") REFERENCES "SuperTag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
