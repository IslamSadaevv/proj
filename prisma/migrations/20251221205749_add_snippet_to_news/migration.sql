/*
  Warnings:

  - Added the required column `snippet` to the `NewsItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NewsItem" ADD COLUMN     "snippet" TEXT NOT NULL;
