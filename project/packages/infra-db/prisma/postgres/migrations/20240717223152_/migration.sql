/*
  Warnings:

  - Added the required column `icon` to the `SuperTag` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SuperTag" ADD COLUMN     "icon" VARCHAR(30) NOT NULL;
