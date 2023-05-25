/*
  Warnings:

  - You are about to alter the column `number` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `patients` MODIFY `number` DECIMAL(65, 30) NOT NULL DEFAULT 0;
