/*
  Warnings:

  - The primary key for the `Propriedade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `seqProp` on the `Propriedade` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `SuperTag` table. All the data in the column will be lost.
  - You are about to drop the column `texto` on the `SuperTag` table. All the data in the column will be lost.
  - Added the required column `conteudo` to the `SuperTag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SuperTag" DROP CONSTRAINT "SuperTag_parentId_fkey";

-- DropForeignKey
ALTER TABLE "SuperTag" DROP CONSTRAINT "SuperTag_userId_fkey";

-- DropIndex
DROP INDEX "SuperTag_parentId_key";

-- AlterTable
ALTER TABLE "Propriedade" DROP CONSTRAINT "Propriedade_pkey",
DROP COLUMN "seqProp",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Propriedade_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "SuperTag" DROP COLUMN "parentId",
DROP COLUMN "texto",
ADD COLUMN     "conteudo" VARCHAR(500) NOT NULL;
