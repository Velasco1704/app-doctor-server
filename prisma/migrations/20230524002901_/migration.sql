/*
  Warnings:

  - You are about to alter the column `number` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `BigInt`.
  - You are about to alter the column `height` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.
  - You are about to alter the column `weight` on the `patients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Int`.

*/
-- AlterTable
ALTER TABLE `patients` MODIFY `number` BIGINT NOT NULL DEFAULT 0,
    MODIFY `height` INTEGER NOT NULL DEFAULT 0,
    MODIFY `weight` INTEGER NOT NULL DEFAULT 0;
