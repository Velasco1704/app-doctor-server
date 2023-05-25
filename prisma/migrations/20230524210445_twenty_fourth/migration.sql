/*
  Warnings:

  - You are about to drop the column `doctorsId` on the `patient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `patient` DROP FOREIGN KEY `Patient_doctorsId_fkey`;

-- AlterTable
ALTER TABLE `patient` DROP COLUMN `doctorsId`,
    ADD COLUMN `doctorId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_doctorId_fkey` FOREIGN KEY (`doctorId`) REFERENCES `Doctor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
