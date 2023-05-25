/*
  Warnings:

  - You are about to alter the column `height` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.
  - You are about to alter the column `weight` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `patients` MODIFY `height` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    MODIFY `weight` DECIMAL(65, 30) NOT NULL DEFAULT 0;
