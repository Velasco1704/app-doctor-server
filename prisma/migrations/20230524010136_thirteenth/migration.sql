/*
  Warnings:

  - You are about to alter the column `number` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- AlterTable
ALTER TABLE `patients` MODIFY `number` INTEGER NOT NULL DEFAULT 0;
