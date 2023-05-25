/*
  Warnings:

  - You are about to drop the column `adress` on the `patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `patient` DROP COLUMN `adress`,
    ADD COLUMN `address` VARCHAR(191) NOT NULL DEFAULT '';
