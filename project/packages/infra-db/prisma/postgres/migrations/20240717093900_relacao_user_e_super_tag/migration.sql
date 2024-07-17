/*
  Warnings:

  - Added the required column `tipo` to the `Propriedade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `SuperTag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Propriedade" ADD COLUMN     "tipo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SuperTag" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SuperTag" ADD CONSTRAINT "SuperTag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
