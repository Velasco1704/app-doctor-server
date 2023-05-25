/*
  Warnings:

  - You are about to alter the column `height` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Double` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `patients` MODIFY `height` VARCHAR(191) NOT NULL DEFAULT '';
