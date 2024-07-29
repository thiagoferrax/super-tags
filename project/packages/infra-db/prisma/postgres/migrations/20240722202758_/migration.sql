/*
  Warnings:

  - You are about to alter the column `titulo` on the `SuperTag` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- DropIndex
DROP INDEX "SuperTag_titulo_key";

-- AlterTable
ALTER TABLE "SuperTag" ALTER COLUMN "titulo" SET DATA TYPE VARCHAR(30);
